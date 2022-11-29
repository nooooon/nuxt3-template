
import { useMediaQuery } from '@vueuse/core'

export const isLargeScreen = useMediaQuery('(min-width: 960px)')
export const isMediumScreen = useMediaQuery('(min-width: 767px)')
export const isMobileScreen = useMediaQuery('(max-width: 750px)')