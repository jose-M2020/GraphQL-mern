import { formatDate } from '@fullcalendar/core';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CachedIcon from '@mui/icons-material/Cached';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

export const status = [
    {
        name: 'Not Started',
        icon: (props) => (
          <AccessTimeOutlinedIcon {...props}/>
        )
    },
    {
        name: 'In Progress',
        icon: (props) => (
            <CachedIcon {...props}/>
          )
    },
    {
        name: 'Completed',
        icon: (props) => (
            <CheckOutlinedIcon {...props}/>
          )
    }
]

export const statusIcon = {
    'Not Started': {
        icon: <AccessTimeOutlinedIcon />
    },
    'In Progress': {
        icon: <CachedIcon />
    },
    'Completed': {
        icon: <CheckOutlinedIcon />
    },
}

export const formatDateTime = (date, showTime = true) => {
  // const dateFormat = +date ? (new Date(+date)).toDateString() : date;
  
  return formatDate(date, {
    year: "numeric",
    month: "short",
    day: "numeric",
    ...((showTime && date?.includes('T')) && (
      {
        hour: "numeric",
        minute: 'numeric'
      }
    ))
  })
}

export const sleep = (delay = 0) => {
  return new Promise( resolve => {
    setTimeout(resolve, delay);
  });
}