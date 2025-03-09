// import React from 'react';
// import { Link } from 'react-router-dom';

// function Footer() {
//   return (
//     <div className='px-0 lg:px-20 bg-[#f1f1f1]'>
//       <footer className="bg-[#2A2A2A] text-white">
//         <div className="container mx-auto px-4 py-12">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {/* Quick Links Column */}
//             <div>
//               <h3 className="text-lg font-bold mb-6">QUICK LINKS</h3>
//               <ul className="space-y-3">
//                 <li>
//                   <Link to="/" className="text-gray-300 hover:text-[#00BFB3]">
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/about-us" className="text-gray-300 hover:text-[#00BFB3]">
//                     About us
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/part-time-jobs" className="text-gray-300 hover:text-[#00BFB3]">
//                     Services
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/career" className="text-gray-300 hover:text-[#00BFB3]">
//                     Career
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/products" className="text-gray-300 hover:text-[#00BFB3]">
//                     Products
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             {/* Services Column */}
//             <div>
//               <h3 className="text-lg font-bold mb-6">SERVICES</h3>
//               <ul className="space-y-3">
//                 <li>
//                   <Link to="/part-time-jobs" className="text-gray-300 hover:text-[#00BFB3]">
//                     Part-Time Jobs 
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/full-time-jobs" className="text-gray-300 hover:text-[#00BFB3]">
//                     Full-Time Jobs 
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/contract-jobs" className="text-gray-300 hover:text-[#00BFB3]">
//                      Contract Jobs 
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/globalStaffing" className="text-gray-300 hover:text-[#00BFB3]">
//                     Global Staffing
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             {/* Outsourcing Services Column */}
//             <div>
//               <h3 className="text-lg font-bold mb-6">OUTSOURCING SERVICES</h3>
//               <ul className="space-y-3">
//                 <li>
//                   <Link to="/" className="text-gray-300 ">
//                     Application Development
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/" className="text-gray-300 ">
//                     System Software
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/" className="text-gray-300 ">
//                     Application Migration & Re-Engineering
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/" className="text-gray-300 ">
//                     Application Maintenance
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/" className="text-gray-300 ">
//                     Application Renovation
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/" className="text-gray-300 ">
//                     Dedicated Development Lab
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             {/* Contact Info Column */}
//             <div>
//               <h3 className="text-lg font-bold mb-6">CONTACT INFO</h3>
//               <ul className="space-y-3">
//                 <li className="flex items-center gap-2">
//                   <a href="tel:(833) 785 - 5777" className="text-[#00BFB3] hover:underline">
//                     +447862200893
//                   </a>
//                 </li>
//                 <li className="flex items-center gap-2">
//                   <a href=" placify.com" className="text-[#00BFB3] hover:underline">
//                   info@theplacify.com
//                   </a>
//                 </li>
//                 {/* <li>
//                   <a href="https://facebook.com" className="text-[#00BFB3] hover:underline">
//                     Facebook
//                   </a>
//                 </li> */}
//                 <li>
//                   <a href="http://www.linkedin.com/in/shubham-raikwar-61a901244" className="text-[#00BFB3] hover:underline">
//                     Linkedin
//                   </a>
//                 </li>
//                 <li>
//                   <a href="https://www.facebook.com/profile.php?id=61571433044193" className="text-[#00BFB3] hover:underline">
//                     Facebook
//                   </a>
//                 </li>
//                 {/* <li>
//                   <a href="https://www.facebook.com/profile.php?id=61571433044193" className="text-[#00BFB3] hover:underline">
//                     Google+
//                   </a>
//                 </li> */}
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="border-t border-gray-800">
//           <div className="container mx-auto px-4 py-4">
//             <p className="text-center text-gray-400">
//               All rights Reserved © 2025 <Link to="/Theplacify.com" className="text-[#00BFB3] hover:underline">Theplacify</Link>
//             </p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Footer;





































































import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='px-0 lg:px-20 bg-[#f1f1f1]'>
      <footer className="bg-[#2A2A2A] text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Quick Links Column */}
            <div>
              <h3 className="text-lg font-bold mb-6">QUICK LINKS</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="text-gray-300 hover:text-[#00BFB3]">Home</Link></li>
                <li><Link to="/about-us" className="text-gray-300 hover:text-[#00BFB3]">About us</Link></li>
                <li><Link to="/part-time-jobs" className="text-gray-300 hover:text-[#00BFB3]">Services</Link></li>
                <li><Link to="/career" className="text-gray-300 hover:text-[#00BFB3]">Career</Link></li>
                <li><Link to="/products" className="text-gray-300 hover:text-[#00BFB3]">Products</Link></li>
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-lg font-bold mb-6">SERVICES</h3>
              <ul className="space-y-3">
                <li><Link to="/part-time-jobs" className="text-gray-300 hover:text-[#00BFB3]">Part-Time Jobs</Link></li>
                <li><Link to="/full-time-jobs" className="text-gray-300 hover:text-[#00BFB3]">Full-Time Jobs</Link></li>
                <li><Link to="/contract-jobs" className="text-gray-300 hover:text-[#00BFB3]">Contract Jobs</Link></li>
                <li><Link to="/globalStaffing" className="text-gray-300 hover:text-[#00BFB3]">Global Staffing</Link></li>
              </ul>
            </div>

            {/* Recruitment Services Column */}
            <div>
              <h3 className="text-lg font-bold mb-6">RECRUITMENT SERVICES</h3>
              <ul className="space-y-3">
                <li>Executive Search</li>
                <li>Permanent Staffing</li>
                <li>Temporary & Contract Staffing</li>
                <li>Bulk Hiring Solutions</li>
                <li>Recruitment Process Outsourcing (RPO)</li>
                <li>IT & Non-IT Hiring</li>
              </ul>
            </div>

            {/* Contact Info Column */}
            <div>
              <h3 className="text-lg font-bold mb-6">CONTACT INFO</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <a href="tel:(833) 785 - 5777" className="text-[#00BFB3] hover:underline">+447862200893</a>
                </li>
                <li className="flex items-center gap-2">
                  <a href="mailto:info@theplacify.com" className="text-[#00BFB3] hover:underline">info@theplacify.com</a>
                </li>
                <li>
                  <a href="http://www.linkedin.com/in/shubham-raikwar-61a901244" className="text-[#00BFB3] hover:underline">Linkedin</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61571433044193" className="text-[#00BFB3] hover:underline">Facebook</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <p className="text-center text-gray-400">
              All rights Reserved © 2025 <Link to="/Theplacify.com" className="text-[#00BFB3] hover:underline">Theplacify</Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
