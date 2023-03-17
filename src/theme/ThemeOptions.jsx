import { deepmerge } from '@mui/utils'
import palette from './palette'

const themeOptions = settings => {
  // ** Vars
  const { themeColor } = settings

  const themeConfig = {
    palette: palette(),
    typography: {
      fontFamily: ['Lato'].join(',')
    }
  }

  return deepmerge(themeConfig, {
    palette: {
      primary: {
        ...themeConfig.palette[themeColor]
      }
    }
  })
}

export default themeOptions
