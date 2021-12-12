
import PersonalInfo from './RenderablePages/PersonalInfo/PersonalInfo';
import PaymentHistory from './RenderablePages/PaymentHistory/PaymentHistory';
import ChangePassword from './RenderablePages/ChangePassword/ChangePassword';
import OrderHistory from './RenderablePages/OrderHistory/OrderHistory';

const RenderAccountInfo = (props) => {

    let renderContent;
    switch (props.activeId.id) {
        case 1:
            renderContent = (
                <PersonalInfo />
            )
            break;
        case 2:
            renderContent = <PaymentHistory />
            break;
        case 3:
            renderContent = <ChangePassword />
            break;
        case 4:
            renderContent = <OrderHistory />
            break;
        default:
            renderContent = <div>Somthing is wrong to render</div>
            break;

    }
    return (
        renderContent
    );
}

export default RenderAccountInfo;