
import { globalStyle } from '@constants/commonStyles'
import { Global } from '@emotion/react'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode;
}

const PublicLayout = ({ children } : Props) => (
  <>
    <Global styles={globalStyle} />
    {children}
  </>
)

export default PublicLayout