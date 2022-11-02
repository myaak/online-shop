import { useState } from 'react'
import Button from '@mui/material/Button'
import {styled} from '@mui/material/styles'


const StyledButton = styled(Button)({
  "&": {
    background: 'linear-gradient(#ffb95a,#ff7818);',
    color: '#FFFFFF',
    textTransofrm: 'none',
    height: '36px',
    width: '94px',
  }
}) 

const Navbar = () => {

  const [searchValue, setSearchValue] = useState<string>()


  // merge button and searchbar div into one
  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__searchbar">
          <input type="text" value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search"
          />
        </div>
        <div className="navbar__search_button">
          <StyledButton>Search</StyledButton>
        </div>
        <div className="navbar__utils">
          <div className="navbar__utils__location">

          </div>
          <div className="navbar__utils__login">

          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
