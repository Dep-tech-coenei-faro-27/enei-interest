import { useEffect } from 'react'
import { pageMarkup } from './content'
import { submitInterest } from './shared/api'

function setButtonLoading(button: HTMLButtonElement, loading: boolean, text: string) {
  button.disabled = loading
  button.textContent = text
}

function setFormMessage(form: HTMLFormElement, message: string, type: 'success' | 'error') {
  let messageElement = form.querySelector<HTMLParagraphElement>('.form-status')

  if (!messageElement) {
    messageElement = document.createElement('p')
    messageElement.className = 'form-status'
    messageElement.setAttribute('aria-live', 'polite')
    form.appendChild(messageElement)
  }

  messageElement.textContent = message
  messageElement.dataset.type = type
}

function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const navbar = document.getElementById('navbar')
    const hamburger = document.getElementById('hamburger')
    const mobileMenu = document.getElementById('mobileMenu')
    const navLinks = [...document.querySelectorAll<HTMLAnchorElement>('.nav-links a')]
    const mainSections = ['sobre', 'atividades', 'agenda', 'equipa', 'info', 'interesse']
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    const setMenu = (open: boolean) => {
      if (!hamburger || !mobileMenu) return
      hamburger.classList.toggle('open', open)
      hamburger.setAttribute('aria-expanded', String(open))
      mobileMenu.classList.toggle('open', open)
      mobileMenu.setAttribute('aria-hidden', String(!open))
      mobileMenu.toggleAttribute('inert', !open)
      document.body.style.overflow = open ? 'hidden' : ''
    }

    const closeMenu = () => setMenu(false)

    const onScroll = () => {
      navbar?.classList.toggle('scrolled', window.scrollY > 60)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    const onHamburgerClick = () => {
      setMenu(!hamburger?.classList.contains('open'))
    }

    hamburger?.addEventListener('click', onHamburgerClick)

    const mobileLinks = [...document.querySelectorAll<HTMLAnchorElement>('.mob-link, .mobile-menu .btn')]
    mobileLinks.forEach((el) => el.addEventListener('click', closeMenu))

    const getNavH = () => (window.innerWidth <= 1024 ? 64 : 76)

    const anchorHandlers: Array<[HTMLAnchorElement, EventListener]> = []
    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
      const handler = (event: Event) => {
        if (anchor.dataset.openDocs === 'privacy') return
        const id = anchor.getAttribute('href')
        if (!id || id === '#') return
        const target = document.querySelector<HTMLElement>(id)
        if (!target) return
        event.preventDefault()
        closeMenu()
        const top = target.getBoundingClientRect().top + window.scrollY - getNavH()
        window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
      }
      anchor.addEventListener('click', handler)
      anchorHandlers.push([anchor, handler])
    })

    let sectionObserver: IntersectionObserver | undefined
    if ('IntersectionObserver' in window && navLinks.length && mainSections.length) {
      sectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            navLinks.forEach((link) => {
              const active = link.getAttribute('href') === `#${entry.target.id}`
              link.classList.toggle('active', active)
              if (active) link.setAttribute('aria-current', 'page')
              else link.removeAttribute('aria-current')
            })
          })
        },
        { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' },
      )
      mainSections.forEach((section) => sectionObserver?.observe(section))
    }

    const filterPills = document.getElementById('filterPills')
    const onFilterClick = (event: Event) => {
      const pill = (event.target as HTMLElement).closest<HTMLElement>('.fpill')
      if (!pill) return
      const filter = pill.dataset.filter
      document.querySelectorAll<HTMLElement>('.fpill').forEach((item) => {
        const active = item === pill
        item.classList.toggle('active', active)
        item.setAttribute('aria-pressed', String(active))
      })
      document.querySelectorAll<HTMLElement>('.ac').forEach((card) => {
        card.classList.toggle('hidden', filter !== 'all' && card.dataset.cat !== filter)
      })
    }
    filterPills?.addEventListener('click', onFilterClick)

    const dayTabs = document.getElementById('dayTabs')
    const onDayClick = (event: Event) => {
      const tab = (event.target as HTMLElement).closest<HTMLElement>('.dtab')
      if (!tab) return
      document.querySelectorAll<HTMLElement>('.dtab').forEach((item) => {
        const active = item === tab
        item.classList.toggle('active', active)
        item.setAttribute('aria-selected', String(active))
      })
      document.querySelectorAll<HTMLElement>('.sch-panel').forEach((panel) => panel.classList.remove('active'))
      const panel = document.getElementById(`sch-${tab.dataset.day}`)
      panel?.classList.add('active')
    }
    dayTabs?.addEventListener('click', onDayClick)

    const setFaqItemOpen = (item: Element, open: boolean) => {
      const button = item.querySelector<HTMLButtonElement>('.fq')
      const answer = item.querySelector<HTMLElement>('.fa')
      item.classList.toggle('open', open)
      button?.setAttribute('aria-expanded', String(open))
      answer?.setAttribute('aria-hidden', String(!open))
    }

    const setFaqCat = (cat: string) => {
      document.querySelectorAll<HTMLElement>('.fi').forEach((item) => {
        const visible = item.dataset.faqcat === cat
        item.classList.toggle('hidden', !visible)
        if (!visible) setFaqItemOpen(item, false)
      })
      document.querySelectorAll<HTMLElement>('.fp').forEach((pill) => {
        const active = pill.dataset.faqcat === cat
        pill.classList.toggle('active', active)
        pill.setAttribute('aria-pressed', String(active))
      })
      document.querySelectorAll<HTMLElement>('.fs').forEach((link) => {
        link.classList.toggle('active', link.dataset.faqcat === cat)
      })
      const pill = document.querySelector<HTMLElement>(`.fp[data-faqcat="${cat}"]`)
      const titleEl = document.getElementById('faqCatTitle')
      if (titleEl && pill) titleEl.textContent = pill.textContent.trim()
    }

    const openFaqItemById = (id: string) => {
      const item = document.getElementById(id)
      if (!item) return
      document.querySelectorAll<HTMLElement>('.fi.open').forEach((openItem) => setFaqItemOpen(openItem, false))
      setFaqItemOpen(item, true)
    }

    const privacyLinks = [...document.querySelectorAll<HTMLAnchorElement>('[data-open-docs="privacy"]')]
    const onPrivacyLinkClick = (event: Event) => {
      event.preventDefault()
      closeMenu()
      setFaqCat('documentos')
      openFaqItemById('privacy-terms')
      window.setTimeout(() => {
        const target = document.getElementById('privacy-terms')
        if (!target) return
        const top = target.getBoundingClientRect().top + window.scrollY - getNavH() - 120
        window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
      }, 30)
    }
    privacyLinks.forEach((link) => link.addEventListener('click', onPrivacyLinkClick))

    const faqPills = document.getElementById('faqPills')
    const onFaqPillsClick = (event: Event) => {
      const pill = (event.target as HTMLElement).closest<HTMLElement>('.fp')
      if (pill?.dataset.faqcat) setFaqCat(pill.dataset.faqcat)
    }
    faqPills?.addEventListener('click', onFaqPillsClick)

    const faqSide = document.getElementById('faqSide')
    const onFaqSideClick = (event: Event) => {
      const link = (event.target as HTMLElement).closest<HTMLElement>('.fs')
      if (!link?.dataset.faqcat) return
      event.preventDefault()
      setFaqCat(link.dataset.faqcat)
    }
    faqSide?.addEventListener('click', onFaqSideClick)

    const faqContent = document.querySelector('.faq-con')
    const onFaqContentClick = (event: Event) => {
      const button = (event.target as HTMLElement).closest<HTMLButtonElement>('.fq')
      if (!button) return
      const item = button.closest<HTMLElement>('.fi')
      if (!item) return
      const wasOpen = item.classList.contains('open')
      document.querySelectorAll<HTMLElement>('.fi.open').forEach((openItem) => setFaqItemOpen(openItem, false))
      if (!wasOpen) setFaqItemOpen(item, true)
    }
    faqContent?.addEventListener('click', onFaqContentClick)

    const faqSearch = document.getElementById('faqSearch') as HTMLInputElement | null
    const onFaqSearch = () => {
      const query = faqSearch?.value.toLowerCase().trim() || ''
      if (!query) {
        const active = document.querySelector<HTMLElement>('.fp.active')
        if (active?.dataset.faqcat) setFaqCat(active.dataset.faqcat)
        return
      }
      document.querySelectorAll<HTMLElement>('.fi').forEach((item) => {
        item.classList.toggle('hidden', !item.textContent?.toLowerCase().includes(query))
      })
    }
    faqSearch?.addEventListener('input', onFaqSearch)

    const wlForm = document.getElementById('wlForm') as HTMLFormElement | null
    const onSubmit = async (event: Event) => {
      event.preventDefault()
      if (!wlForm) return
      const btn = wlForm.querySelector<HTMLButtonElement>('button[type="submit"]')
      const nameInput = wlForm.querySelector<HTMLInputElement>('#wName')
      const emailInput = wlForm.querySelector<HTMLInputElement>('#wEmail')
      const consentInput = wlForm.querySelector<HTMLInputElement>('#wConsent')
      if (!btn || !nameInput || !emailInput || !consentInput) return

      const name = nameInput.value.trim()
      const email = emailInput.value.trim()
      const consent = consentInput.checked

      if (!name || !email) {
        setFormMessage(wlForm, 'Preenche o nome e o email antes de submeter.', 'error')
        return
      }

      if (!consent) {
        setFormMessage(wlForm, 'Tens de aceitar os termos para registar interesse.', 'error')
        return
      }

      const originalText = btn.textContent || 'Tenho interesse'
      setButtonLoading(btn, true, 'A enviar...')
      btn.classList.remove('success')

      try {
        await submitInterest({ name, email, consent })
        btn.classList.add('success')
        setButtonLoading(btn, false, '✓ Interesse registado!')
        setFormMessage(wlForm, 'Obrigado! O teu interesse foi registado com sucesso.', 'success')
        wlForm.reset()
        window.setTimeout(() => {
          btn.classList.remove('success')
          btn.textContent = originalText
        }, 4000)
      } catch (error) {
        setButtonLoading(btn, false, originalText)
        setFormMessage(wlForm, error instanceof Error ? error.message : 'Erro inesperado. Tenta novamente.', 'error')
      }
    }
    wlForm?.addEventListener('submit', onSubmit)

    setFaqCat('candidatura')

    return () => {
      window.removeEventListener('scroll', onScroll)
      hamburger?.removeEventListener('click', onHamburgerClick)
      mobileLinks.forEach((el) => el.removeEventListener('click', closeMenu))
      privacyLinks.forEach((link) => link.removeEventListener('click', onPrivacyLinkClick))
      anchorHandlers.forEach(([anchor, handler]) => anchor.removeEventListener('click', handler))
      sectionObserver?.disconnect()
      filterPills?.removeEventListener('click', onFilterClick)
      dayTabs?.removeEventListener('click', onDayClick)
      faqPills?.removeEventListener('click', onFaqPillsClick)
      faqSide?.removeEventListener('click', onFaqSideClick)
      faqContent?.removeEventListener('click', onFaqContentClick)
      faqSearch?.removeEventListener('input', onFaqSearch)
      wlForm?.removeEventListener('submit', onSubmit)
      document.body.style.overflow = ''
    }
  }, [])

  return <div dangerouslySetInnerHTML={{ __html: pageMarkup }} />
}

export default App
