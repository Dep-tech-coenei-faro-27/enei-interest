from datetime import datetime
import zoneinfo

def get_current_time():
    return datetime.now(zoneinfo.ZoneInfo("Europe/Lisbon"))