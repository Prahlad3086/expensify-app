// Higher Order Component (HOC) -> A component (HOC) that renders another component
// Advantages of igher order comonents
// Reuse codes
// Render hijacking
// Prop manipulations
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props)=> (
    <div>
        <h1>Info</h1>
        <p>This info is : {props.info}</p>
    </div>
);

const withAdmiinWarning = (WrappedComponent)=>{
    return (props)=> (
        <div>
            {props.isAdmin && <p>This is private info please don't share!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent)=> {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Please login to view more informations</p>
            )}
        </div>
    );
}

const AdminInfo = withAdmiinWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info='Here is the details' /> , document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info='Here is the details' /> , document.getElementById('app'));