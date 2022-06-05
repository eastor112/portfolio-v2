import {
  Box,
  Divider,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import AppsIcon from '@mui/icons-material/Apps';
import PhoneIcon from '@mui/icons-material/Phone';
import WebIcon from '@mui/icons-material/Web';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image';
import { FC } from 'react';
import NextLink from 'next/link';

interface Props {
  width: number;
}

const DrawerContent: FC<Props> = ({ width }) => {
  return (
    <div>
      {width < 600 && <Toolbar />}
      <Divider />

      <Box
        sx={{
          textAlign: 'center',
          marginBottom: 5,
        }}
      >
        <Box
          component="figure"
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
            className="sidebar__info image"
            src="/static/img/Emerson.jpg"
            alt="Emerson"
            width={200}
            height={200}
          />
        </Box>
        <Box className="sidebar__info name">
          <NextLink href="/">
            <Link
              sx={{
                textDecoration: 'none',
                cursor: 'pointer',
                fontSize: '0.8rem',
              }}
            >
              <a>
                <h1>EMERSON M. ASTO RODRIGUEZ</h1>
              </a>
            </Link>
          </NextLink>
        </Box>

        <NextLink href="/">
          <Link
            sx={{
              textDecoration: 'none',
              cursor: 'pointer',
              fontSize: '0.8rem',
            }}
          >
            <a>
              <h2>Full Stack Developer</h2>
            </a>
          </Link>
        </NextLink>
      </Box>
      <Divider />
      <List>
        <ListItem key="Portfolio" disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ color: 'white' }}>
              <AppsIcon />
            </ListItemIcon>
            <ListItemText primary={'PortFolio'} />
          </ListItemButton>
        </ListItem>

        <ListItem key="My offer" disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ color: 'white' }}>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary={'My offer'} />
          </ListItemButton>
        </ListItem>

        <ListItem key="Contact me" disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ color: 'white' }}>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary={'Contact me'} />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />
      <List>
        <ListItem key="My resume" disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ color: 'white' }}>
              <AttachFileIcon />
            </ListItemIcon>
            <ListItemText primary={'My resume'} />
          </ListItemButton>
        </ListItem>

        <ListItem key="Blog" disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ color: 'white' }}>
              <WebIcon />
            </ListItemIcon>
            <ListItemText primary={'Blog'} />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem key="Get in touch" disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ color: 'white' }}>
              <ConnectWithoutContactIcon />
            </ListItemIcon>
            <ListItemText primary={'Get in touch'} />
          </ListItemButton>
        </ListItem>

        <Box sx={{ display: 'flex', paddingX: '50px' }}>
          <ListItemButton sx={{ display: 'flex', justifyContent: 'center' }}>
            <LinkedInIcon />
          </ListItemButton>
          <ListItemButton sx={{ display: 'flex', justifyContent: 'center' }}>
            <GitHubIcon />
          </ListItemButton>
          <ListItemButton sx={{ display: 'flex', justifyContent: 'center' }}>
            <MailIcon />
          </ListItemButton>
        </Box>
      </List>
    </div>
  );
};

export default DrawerContent;
