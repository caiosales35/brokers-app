import Button from '@material-ui/core/Button'
import styled from 'styled-components'

const StyledButton = styled(Button).attrs(({ variant }) => ({
  variant: variant || 'contained'
}))``

export default StyledButton
