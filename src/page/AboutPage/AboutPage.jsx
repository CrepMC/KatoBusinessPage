import './AboutPage.css';
import { useEffect } from 'react';
import AboutCard from '../../components/AboutCard/AboutCard';
import { Link } from 'react-router-dom';
import MissionImg from '../../assests/mission.png';
import StoryImg from '../../assests/story.png';
import ValuesImg from '../../assests/values.png';
import ProcessImg from '../../assests/process.png';
import LogoImg from '../../assests/logo.png';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutData = [
    {
      reverse: true,
      imageUrl: LogoImg,
      altText: 'Lịch sử hình thành KATO',
      title: 'Về KATO',
      subtitle:
        'KATO là thương hiệu thời trang mang đậm phong cách vintage – retro, chuyên về giày da thật và trang phục từ chất liệu tự nhiên như da bò nguyên tấm, da dê, linen, cotton, denim… Với sự kết hợp giữa thiết kế tinh tế, thủ công tỉ mỉ và sự thoải mái trong từng sản phẩm, KATO mang đến cho khách hàng trải nghiệm thời trang bền vững, khác biệt và giàu cá tính',
    },
    {
      imageUrl: StoryImg,
      altText: 'Lịch sử hình thành KATO',
      title: 'Lịch sử hình thành',
      text: 'KATO được thành lập từ niềm đam mê với vẻ đẹp cổ điển và sự bền bỉ của những món đồ thủ công. Chúng tôi bắt đầu từ một xưởng nhỏ, với mong muốn tái hiện lại những giá trị thời trang đích thực...',
      linkTo: '/about/story',
      linkText: 'Xem thêm...',
    },
    {
      reverse: true,
      imageUrl: MissionImg,
      altText: 'Sứ mệnh của KATO',
      title: 'Sứ mệnh & Tầm nhìn',
      text: 'Sứ mệnh của KATO là mang đến những sản phẩm không chỉ đẹp về hình thức mà còn bền vững với thời gian, trở thành người bạn đồng hành đáng tin cậy trong hành trình khẳng định phong cách của mỗi khách hàng.',
      linkTo: '/about/mission',
      linkText: 'Xem thêm...',
    },
    {
      imageUrl: ValuesImg,
      altText: 'Giá trị cốt lõi của KATO',
      title: 'Giá trị cốt lõi',
      text: 'Chất lượng, Bền vững, và Sáng tạo là ba trụ cột cốt lõi định hình nên mọi hoạt động của KATO. Chúng tôi cam kết mang đến những sản phẩm vượt trội, thân thiện với môi trường và luôn đổi mới.',
      linkTo: '/about/values',
      linkText: 'Khám phá giá trị...',
    },
    {
      reverse: true,
      imageUrl: ProcessImg,
      altText: 'Quy trình sản xuất tại KATO',
      title: 'Quy trình sản xuất',
      text: 'Từ việc lựa chọn nguyên liệu thô cao cấp đến những đường khâu tỉ mỉ của người thợ thủ công, mỗi sản phẩm KATO đều trải qua một quy trình kiểm soát chất lượng nghiêm ngặt để đảm bảo sự hoàn hảo.',
      linkTo: '/about/process',
      linkText: 'Xem quy trình...',
    },
  ];

  return (
    <div className='about-page-container'>
      <main className='about-content'>
        {aboutData.map((card, index) => (
          <AboutCard key={index} {...card} />
        ))}
      </main>
    </div>
  );
};

export default AboutPage;
