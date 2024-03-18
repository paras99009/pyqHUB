import React from 'react';
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
              {/* {footer}  */}

              <div className="footer jumbotron-footer">

<div className='container py-5 pb-0 text-center text-lg-start '>
  <div className='row border-down'>
    <div className='col-md-5 mb-3'>
      <div>


      </div>
      <hr className='text-white mb-4 mt-0 d-inline-block ' style={{width:"150px"}}/>
      <h3 className='footer-h'>Address</h3>
      <div className='d-flex'>
        <i className='fa fa-location-dot'></i>
        <p className='pe-md-5 pe-0 address'>
        Chhatrapati Shahu Ji Maharaj University, Kanpur
        <br/>
        (Formerly Kanpur University, Kanpur)
Kalyanpur, Kanpur-208024
        <br/>
      Instagram :code_istaan
      <p>

     E-mail: pyqhub.127@gmail.com
      </p>
        </p>

      </div>


    </div>

     <div className='col-md-7'>
      <div className='row'>
        <div className='col-12'>
          <h2 className='h5 footer-h'>
          Important Links

          </h2>

        </div>
        <div className="col-md-4 custom-text-color">
          <hr className='text-white mt-0 d-inline-block' style={{width:"70px"}}/>
          <ul className='list-unstyled b-li custom-text-color'>
            <li className='mb-3  custom-text-color'>
             <Link to='https://upgovernor.gov.in/en'>Raj Bhavan, Uttar Pradesh

             </Link>
            </li>
            <li className='mb-3'>
            <Link to='https://uphed.gov.in/'>Higher Education, Uttar Pradesh</Link>
            </li>
            <li className='mb-3'><Link to='https://heecontent.upsdc.gov.in/Home.aspx'>Uttar Pradesh Higher Education Digital Library</Link></li>
            

          </ul>
          
        </div>
        <div className="col-md-4">
        <hr className='text-white mt-0 d-inline-block' style={{width:"70px"}}/>
          <ul className='list-unstyled b-li'>
            <li className='mb-3'>
             <Link to='https://www.education.gov.in/en/whos-who'>HRD Minister

             </Link>
            </li>
            <li className='mb-3'>
            <Link to='https://ncte.gov.in/Website/Index.aspx'>NCTE</Link>
            </li>
            <li className='mb-3'><Link to='https://uponlinenss.upsdc.gov.in/'>NSS Registration</Link></li>
            

          </ul>

        </div>
        <div className="col-md-4">
        <hr className='text-white mt-0 d-inline-block' style={{width:"70px"}}/>
          <ul className='list-unstyled b-li'>
            <li className='mb-3'>
             <Link to='https://applications.csjmu.ac.in/mgsl/'>MGSL (NSS)

             </Link>
            </li>
            <li className='mb-3'>
            <Link to=''>Tenders</Link>
            </li>
            

          </ul>

        </div>
      </div>

     </div>

  </div>

  
</div>
</div>
    </div>
  )
}

export default Footer
