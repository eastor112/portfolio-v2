import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Image from 'next/image';

const DrawerContent = () => {
  return (
    <div>
      <Toolbar />
      <Divider />

      <Box
        sx={{
          textAlign: 'center',
          marginBottom: 5,
        }}
      >
        <Box
          component='figure'
          sx={{
            height: '150px',
            width: '150px',
            overflow: 'hidden',
            borderRadius: '50%',
            textAlign: 'center',
            display: 'inline-block',
          }}
        >
          <Image
            className='sidebar__info image'
            src='/static/img/Emerson.jpg'
            alt='Emerson'
            width={200}
            height={200}
          />
        </Box>
        <h1 className='sidebar__info name'>
          <a href='./index.html'>EMERSON M. ASTO RODRIGUEZ</a>
        </h1>
        <h2 className='sidebar__info job'>
          <a href='./index.html'>MECHATRONICS ENGINEER</a>
        </h2>
      </Box>

      <List>
        {['PortFolio', 'My offer', 'Contact me'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: 'white' }}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['My Resume', 'Blog'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: 'white' }}>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default DrawerContent;
