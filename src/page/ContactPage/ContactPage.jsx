import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className='ContactPage'>
      <div className='contact-container'>
        <h1>LIÊN HỆ VỚI KATO</h1>
        <p className='intro-text'>
          Chúng tôi luôn sẵn lòng lắng nghe từ bạn. Dù bạn có câu hỏi về sản
          phẩm, cần hỗ trợ về đơn hàng hay chỉ muốn gửi lời chào, đừng ngần ngại
          kết nối với KATO qua các thông tin dưới đây.
        </p>
        <div className='contact-content'>
          <div className='contact-info'>
            <h3>Thông tin liên lạc</h3>
            <table className='contact-table'>
              <tbody>
                <tr>
                  <td className='r1'>
                    <i className='fa-solid fa-location-dot'></i>
                    <span>&nbsp;</span>
                    <span>&nbsp;</span>
                    <strong>Trụ sở:</strong>
                  </td>
                  <td>
                    Số 164 đường Ngô Xuân Quảng, Trâu Quỳ, Gia Lâm, Hà Nội,
                    Vietnam
                  </td>
                </tr>
                <tr>
                  <td className='r1'>
                    <i className='fa-solid fa-phone'></i>
                    <span>&nbsp;</span>
                    <span>&nbsp;</span>
                    <strong>ĐT:</strong>
                  </td>
                  <td>
                    <a href='tel:0979021450'>0979 021 450</a>
                  </td>
                </tr>
                <tr>
                  <td className='r1'>
                    <i className='fa-solid fa-globe'></i>
                    <span>&nbsp;</span>
                    <span>&nbsp;</span>
                    <strong>Website:</strong>
                  </td>
                  <td>
                    <a
                      href='https://kato.net.vn'
                      target='_blank'
                      rel='noreferrer'
                    >
                      kato.net.vn
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className='r1'>
                    <i className='fa-brands fa-facebook'></i>
                    <span>&nbsp;</span>
                    <span>&nbsp;</span>
                    <strong>Fanpage:</strong>
                  </td>
                  <td>
                    <a
                      href='https://facebook.com/KATOShop'
                      target='_blank'
                      rel='noreferrer'
                    >
                      KATOShop
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='contact-map'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.693350995161!2d105.92754447592205!3d21.0049334884242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a96394055555%3A0x39a86d039555351!2zMTY0IE5nLiDEkC4gTmfDtCBZdXhuIiBEdOG7i2EsIFRyxrDDonUgUXXhu7MsIEdpYSBMw6JtLCBIw6AgTuG7mWksIFZp4buHdG5hbQ!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s'
              width='600'
              height='450'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title='KATO Shop Location'
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
