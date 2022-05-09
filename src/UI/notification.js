import {notification} from 'antd';
import 'antd/dist/antd.css';
export  const  Notification = (type,message) => {
          notification[type]({
            message: message,
            duration :3
          })
  };