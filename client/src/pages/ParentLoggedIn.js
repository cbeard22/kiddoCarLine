/* eslint-disable react-hooks/rules-of-hooks */
import { useQuery } from '@apollo/client';
import './QrCode.css';
import {QUERY_PARENT} from '../utils/queries';

function QrCode() {
    const { loading, data } = useQuery(QUERY_PARENT);
    const studentLastName = data.me.studentLastName;

    const qrCode = `http://api.qrserver.com/v1/create-qr-code/?data=${studentLastName}!&size=400x400&bgcolor=ffffff`;


    return (
        <div className="App">

            <h1>Welcome!</h1>
            <h2>Please have this QR Code ready to be scanned. </h2>
            <div className="output-box">
                <img src={qrCode} alt="" />
                <a href={qrCode} download="QRCode">
                    <button type="button">Download</button>
                </a>
            </div>
        </div>
    );
}

export default QrCode;
