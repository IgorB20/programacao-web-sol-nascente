import React from 'react';

export default function Header(){
    return (
        <header className="w-100 px-5 py-2 d-flex justify-content-center align-items-center" style={{borderBottom:"1px solid #d4d4d4"}}>
            <div className="w-100">
                <img
                    alt=""
                    src="http://imoveiscj.com.br/site/images/logo-sol-nascente.png"
                    style={{width: "100px"}}
                />
                {/* <h2>Sol nascente</h2> */}
            </div>
           
        </header>
    );
}