import { notification } from 'antd';

export const openNotificationWithIcon = (type: 'success' | 'info' | 'warning' | 'error', title: string, description: string) => {
    notification[type]({
        message: title,
        description: description,
    });
};
