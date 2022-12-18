import { FormEvent, useState } from 'react'
import { ToggleTheme } from './'
import {Box, Button, useColorModeValue} from '@chakra-ui/react'

const Navbar = () => {

  const [searchValue, setSearchValue] = useState<string>()


  const handleSearch = (e: FormEvent) => {
    e.preventDefault()
    alert(searchValue)
  }

  return (
    <Box className="navbar" bg={useColorModeValue("brand.500","secondary.100")}>
      <div className="navbar__wrapper">
        <div className="navbar__logo">
        </div>
        <div className="navbar__searchbar"
         style={{
          backgroundColor: useColorModeValue("#fff", "#202124")
        }}
        >
        <form 
          style={{
            width: '100%',
            display:'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
          <div className="navbar__searchbar__section">
            <input type="text" value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search"
              style={{
                backgroundColor: useColorModeValue("#fff", "#202124")
              }}
            />
          </div>
          <div className="navbar__search_button">
              <Button 
                type="submit"
                style={{
                  backgroundColor: useColorModeValue("#fff", "#202124")
                }}
                onClick={handleSearch}
              >
                 <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
                   <circle cx="11" cy="11" r="8"></circle>
                   <line x1="21" y1="21" x2="16.65" y2="16.65">
                   </line>
                 </svg>
              </Button>
          </div>
        </form>
        </div>
        <div className="navbar__utils">
          <div className="navbar__utils__location">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3">
              </circle>
            </svg>
            LOCATION
          </div>
          <div className="navbar__utils__login">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            LOGIN
          </div>
          <ToggleTheme />
        </div>
      </div>
    </Box>
  )
}

export default Navbar
