import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

export default function (date?: dayjs.ConfigType): dayjs.Dayjs {
  dayjs.extend(relativeTime)
  dayjs.locale('zh-cn')

  return dayjs(date)
}
