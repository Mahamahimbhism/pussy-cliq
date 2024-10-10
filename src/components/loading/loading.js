import React from 'react';
import ReactLoading from 'react-loading';
import './loading.css'; // Assuming you will create this CSS file

const Loading = ({ type = 'bubbles', color = '#000' }) => (
    <div className="loader-container">
        <ReactLoading type={type} color={color} height={'50px'} width={'50px'} />
    </div>
);

export default Loading;
