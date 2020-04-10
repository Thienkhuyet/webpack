import React, { useState } from 'react';
import './header.scss';
import { Button } from 'antd';
function Header() {
    const [count, setCount] = useState(0)
    return (
        <div className="header">hello {count}
            <Button onClick={() => setCount(count + 10)}>Click</Button>
        </div>
    )
}
export default Header;