import styled from 'styled-components';
import {Settings2Outline} from '@styled-icons/evaicons-outline/Settings2Outline';
import {KeyboardArrowLeft} from '@styled-icons/material-rounded/KeyboardArrowLeft';
import {Switch} from '@styled-icons/icomoon/Switch';
import {MoonFill} from '@styled-icons/bootstrap/MoonFill';
import {Grid} from '@styled-icons/bootstrap/Grid';
import {UserCheck} from '@styled-icons/boxicons-solid/UserCheck';
import {Group} from '@styled-icons/boxicons-regular/Group';
import {Photo} from '@styled-icons/foundation/Photo'
import {MessageSquare} from  '@styled-icons/evaicons-solid/MessageSquare';
import {Notification} from '@styled-icons/remix-line/Notification';
// import {Switch} from '@styled-icons/entypo/Switch'
import Toggle from 'react-dark-mode-toggle';

export const ToggleMode = styled(Toggle)`
    margin-left:auto;
`

export const Container = styled.div`
    width:100%;
    box-sizing:border-box;
    padding:100px 300px;
    margin: 0 auto;
    overflow-y:auto;
`
export const MobileContainer = styled.div`
    width:450px;
    height:700px;
    box-shadow:0 0 10px 2px rgba(0,0,0,.4);
    background:${({color})=>color};
    margin:0 auto;
    padding:20px;
    
    .line{
        width:100%;
        height:2px;
        margin: 20px auto;
    }
`
export const TopIconContainer = styled.div`
    width:100%;
    display:flex;
    // background-color:wheat;
    justify-content:space-between;
`
export const Icon = styled.div``

Icon.Arrow = styled(KeyboardArrowLeft)`
    width:24px;
    cursor:pointer;
    color:${({color})=>color};
`
Icon.Switch = styled(Switch)`
    width:20px;
    cursor:pointer;
    transform:rotate(30deg);
    color:${({color})=>color};
`
export const ImgContent = styled.div`
    width:100%;
    flex-direction:column;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:80px;
    p{
        color:${({color})=>color}  
    }
    .img{
        width:80px;
        height:80px;
        border-radius:40px;
        background-color:pink;
    }
   
`

export const DarkMode = styled.div`
    display:flex;
    width:100%;
    margin-top:30px;
`
export const Title = styled.div`
    padding-left:20px;
    color:${({color})=>color};
`
Icon.Moon = styled(MoonFill)`
    width:20px;
    color:${({color})=>color};
`
Icon.Grid = styled(Grid)`
    width:20px;
`
Icon.UserCheck = styled(UserCheck)`
    width:20px;
    color:${({color})=>color};
`
Icon.Group = styled(Group)`
    width:20px;
    color:${({color})=>color};
`
Icon.Photo = styled(Photo)`
    width:20px;
    color:${({color})=>color};
`
Icon.MessageSquare = styled(MessageSquare)`
    width:20px;
    color:${({color})=>color};
`
Icon.Notification = styled(Notification)`
    width:20px;
    color:${({color})=>color};
`
Icon.SettingIcon = styled(Settings2Outline)`
width:20px;
color:${({color})=>color};
`