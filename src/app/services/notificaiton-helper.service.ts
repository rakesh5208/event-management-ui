import { Injectable } from '@angular/core';
import { NotificationType, NotifyConfig, NotificationService } from 'angular2component';
@Injectable()
export class NotificationHelperService {
    constructor(private notifyService: NotificationService) {

    }
    showMessage(message: string, notifyType: NotificationType, timeout?: number) {
        const timeoutConfig: NotifyConfig = { timeout: 5000 };
        if (timeout) {
            timeoutConfig.timeout = timeout;
        }
        switch (notifyType) {
            case NotificationType.SUCCESS:
                this.notifyService.showSuccess(message, timeoutConfig);
                break;
            case NotificationType.ERROR:
                this.notifyService.showError(message, timeoutConfig);
                break;
            default:
                this.notifyService.showMessage(message, timeoutConfig);
                break;
        }
    }

}