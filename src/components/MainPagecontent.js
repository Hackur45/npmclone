// import React from 'react'

// export default function MainPagecontent() {
//   return (
//     <div className='content'>
//         <div className="text-0">
//         <h1>Build amazing things</h1>
//         </div>
//         <div className='text-1'>
//             <p>We're GitHub, the company behind the npm Registry and npm CLI. We offer those to the community for free, but our day job is building and selling useful tools for developers like you.</p>
//         </div>
//         <div className='text-2'>
//         <h3>Take your JavaScript development up a notch</h3>
//         </div>
//         <div className="text-3">Get started today for free, or step up to npm Pro to enjoy a premium JavaScript development experience, with features like private packages.
//         </div>
//     </div>
//   )
// }

import React from 'react';
import './MainPagecontent.css'; // Import your CSS file for additional styling if needed

export default function MainPagecontent() {
  return (
    <div className='content'>
      <div className="text-0">
        <p className='head'>Build amazing things</p>
      </div>
      <div>
        <p className='text-1'>We're GitHub, the company behind the npm Registry and npm CLI. We offer those to the community for free, but our day job is building and selling useful tools for developers like you.</p>
      </div>
      <div style={{width : '400px'}}>
        <p className='text-2'>Take your JavaScript development up a notch</p>
      </div>
      <div>
        <p className='text-3'>
        Get started today for free, or step up to npm Pro to enjoy a premium JavaScript development experience, with features like private packages.
        </p>
      </div>
    </div>
  );
}

