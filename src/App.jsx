import './App.css';
import { Container, MobileContainer,TopIconContainer,Icon,ImgContent,DarkMode,Title,ToggleMode } from './AppStyle';
import Count from './Count';
import React, {useState,useContext} from 'react';
import {ThemeContext } from './Context';

function App() {
  const [mode,setMode] = useState(false);
  const [theme,setTheme] = useContext(ThemeContext);
  const dark = {
    icon:'white',
    title:'white',
    background:'black',
}
const light = {
    icon:'black',
    title:'black',
    background:'white',
}

  const onChange= () =>{
    setMode(!mode);
    setTheme(mode? light: dark)
  }


  return (
    <>
      <Container >
          <MobileContainer color={theme.background}>
              <TopIconContainer >
                  <Icon.Arrow color={theme.icon}/>
                  <Icon.Switch color={theme.icon}/>
              </TopIconContainer>
              <ImgContent >
                <div className="img">
                  
                </div>
                <p color={theme.title}>Assalomu alaykum</p>
              </ImgContent>
              <DarkMode>
                  <Icon.Moon color={theme.icon} />
                  <Title color={theme.title}><span>Dark mode</span></Title>
                  <ToggleMode onChange={onChange} checked={mode} size={50} />
              </DarkMode>
              <DarkMode>
                  <Icon.Grid color={theme.icon}/>
                  <Title color={theme.title}><span>Story</span></Title>
              </DarkMode>
              <DarkMode>
                  <Icon.UserCheck color={theme.icon}/>
                  <Title color={theme.title}><span>Chat Head</span></Title>
              </DarkMode>
              <DarkMode>
                  <Icon.Group color={theme.icon}/>
                  <Title color={theme.title}><span>Group</span></Title>
              </DarkMode>
              <hr className="line" />
              <DarkMode>
                  <Icon.Photo color={theme.icon}/>
                  <Title color={theme.title}><span>Media and Photo</span></Title>
              </DarkMode>
              <DarkMode>
                  <Icon.SettingIcon color={theme.icon}/>
                  <Title color={theme.title}><span>Setting and privicy</span></Title>
              </DarkMode>
              <DarkMode>
                  <Icon.MessageSquare color={theme.icon}/>
                  <Title color={theme.title}><span>Help Centre</span></Title>
              </DarkMode>
              <DarkMode>
                  <Icon.Notification color={theme.icon}/>
                  <Title color={theme.title}><span>Notification</span></Title>
              </DarkMode>
              
          </MobileContainer>
      </Container>
    </>
  );
} 

export default App;
