import React from 'react';
import Web from '../src/images/Home.png';
import Comman from './Comman';



const Main = () => {
    const downloadFile = () => {
        const url = 'https://drive.google.com/drive/u/0/folders/1VXAxM7HGtQZTof8nAVzVHDbiAk9SmX7v'; // replace with your file URL
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      const downloadFile1 = () => {
        const url = 'https://doc-0k-88-docs.googleusercontent.com/docs/securesc/u7bf0s6l594158g94gum9m6u2r819aku/r69vaqaogk88c62k4kfe6ke4lvjpn5d8/1683274575000/12324823812429385842/12324823812429385842/1fJiz_KbcGrFO1mryQdkWR_pHGYWiDsnu?e=download&ax=ADWCPKBLtdAQnEKNS-ljLweWyOo1pgUm_1LNkdpV3ANH-I9uH9N8B2hrujz8wRyd_4Xk9I77yV49tthXTPVX3piQbjjN3Z9n5uMigTbbnJIA_QIc3RpzHrUKTelWxE8VIfSanA5z7rnHqv3iHFkhSTqsLSVfsw8VUdJjhStiki0-EpRV3Mh8FVfC1OMxImirZcC2L-tUP28VWXs3ITIUkWf2M9zbYRzzXdpXV9gHfHdDpfhzMRiep4uKkgU_VJF5TMzGO7fCFlx8YxrKpGzUjE8Fq2LiIfh-e4h04ROirzzl_lz1h407BG0H9u1x6z2THZ_ddKflyTrkqrG8JskOj-hBXzgpUdKYgcsB1oUPcjJjX2oRDsr-S34Ls-iqzibkL31Bc9o0iHsnLVskZ9yn3r0VrwYzuH2V0oFhBotsj-ls5LqU0Hps6OaHvwWftLcEL_KBaiDMM2KeOJy4lXvBjIYoqpYyFFyoHHr9i-fwavn8wnAtVZ7u9J6hgUZlodRxlwP_zgaYjb3QiH19PGcp9dtle-ItgCtbdnkTeGiDxA8s4zjR2-uk6BKw3eJ6pJpF7-U0pcO34fXEBVdEqVn4PFgUqSFnIK1laZpqldvtpA9lFNrQyjgdBBf1NyTIm-4C4jxNJiPrRiUqmhabBWOaI5MwpFpHjF_dNkOBAdPPbeRK4lA8rhFEGXUtnaCK2vu61qbl_-qfdSHXN8tkTzrKc4i77fo4aDNFyFZoPBmD5q9OJbrovhcB9UsFCawg7FPW0SLinlHSQyy8yhjDtvn2WOykzTK3crT3CbqA2UpNx-KhAfEsU6xuxSwAK4G6ZExJkEkMVWCtWCNgaXQKC0CfQYMKkVrSy9tbYgouk7itJ2cPvmt5wKG9piUBKaMrqTqmkv3zFnyQKAylkkO_qCFmmZrTZZltEEmJnQakFk_GmxYP9KA610U0Gxa9Rg0-d86czH4Xt8l3mNNtmPbAAwIgePNYQOVcLCQAFOYbvPKT6NRfrZc&uuid=1c40f204-0d80-41a9-9cf5-2cee6137ecfd&authuser=0&nonce=pslieiq8mnkak&user=12324823812429385842&hash=oe8pkud9rvi0eqcaigq7vjjvvb1ksvkr'; // replace with your file URL
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      const downloadFile2 = () => {
        const url = 'https://doc-10-88-docs.googleusercontent.com/docs/securesc/u7bf0s6l594158g94gum9m6u2r819aku/lpksniom7mo7oicjhhc9g06fu3k5s3j2/1683274650000/12324823812429385842/12324823812429385842/1oB8bEq904dZMEiNN9LfkgYPWfMyWx0WS?e=download&ax=ADWCPKBEmNBDqABLl0QZvuudwzAbloLpMHTasjYHx7_8Sp8rRkqnsk4AaJpMHAdl2WsyffihAr8soKa30oTCZ0on261uQ6p4WsYztt2GDThz7lpiTkPGsi_Y5W6R8xXJRXEsiJh2DOHmjgxoRUPJA_8esO2erDepD7I_gD1UwZoDSpqKx09vpNCVfQsmvQTeuxWG1ThKkW_R7Wu0agunLSiDKsOMlPhm7uaf_6fIl6-rINQkV99gqI-vaUPPJcVxavFA4hAiYfwGjvWpF8f4q2C1MwoEUcU24fFTRlyeDCjxVqGGFjMtaZCCLK6393QY0mn2U4R_wa7ERxGruvty6PB838aBpO_3mKKRiwhyOBkkmtBLVh2frXOtTsl_zf3nyG1H7vRKcZqrV23EXbuKSTOEXlWVDoYGBj73Engu15kBa_roAZgRnw1cBGV2EQ1UW-5V4SeU8p6WLuEWDt7a2DbSbC2l2Bj8D1B2lt5gfgANJU5K9QiIfRCh0g8vjXpsV7gBLC7fYEuvoSUG--PC0Qjb38lF_GdvrXaYfMceqf5B5KdfM0MXcekl6qGFgMtw3mF_b9brjEpgZJttFEjjmsK6orGT5OLSJD_l6QsO8yGtq04cyHeeVFGpVW4x6q0-a29cEno72C6p7qPyGVWN42P0DDTfAGK06C8O3eHH6GzUHSReiLdOsC-pe3moYw61C4W4eLWLJGJRplSA9a9gcZFV1HAivyCg3n3XIFsFXKCdOKA1ZeVh5j04t5dMQgLMVoNm3DwR9dxsGxpdxjSqlWuWSLMVWSZVZH9LZvmgugWwSyQteNSmqZXsbJKs1eOKlIkVNRSq4ZqsfmSOgt6KIKGpsSjIOl1xuNasSJ8tgA99f20AQgz_k8pdD9g9bT1VYy2GRSmolos-GEdFA3mav6-lfc5Z_Og4ELq3Zx-bw2TvwgrCqAi8c4iIuixlr_Jx0tLBxA_YaLWjr0EDrFlDW_mrWRbn8tnVS_6bxvOOVAYXseE&uuid=f55a31f8-4f0d-4ae1-a596-9450c9c9722e&authuser=0'; // replace with your file URL
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
      const downloadFile3 = () => {
        const url = 'https://doc-14-88-docs.googleusercontent.com/docs/securesc/u7bf0s6l594158g94gum9m6u2r819aku/qk2ik8mmm864lnju7kc2j02plclk6dbl/1683274650000/12324823812429385842/12324823812429385842/1EuO5zK6YzvGArm_Ydwm5vD7ZYWDhgDAV?e=download&ax=ADWCPKBCIXPVBdYRh1Nxe2bgMOxCIolXt8BHLeM-b-YBD8atWAvYCm06QFDYRaiqLFhFdlj83cc6x9l8pIQ_t7ZV7uTFILwyRHaaHMScMAmNdUcsjN_eZZzmNnhzEnluY8mq67ow8ciZfboDc_caZwnS28nR0eyjfe_UvdbLQIyvThNc7woqhr3e0WRDcQ6Dga8M981hnh5Ug85tOcSbHj8h-jODKruRTR-qB5RykX9urUwZhKp23zHg4lLWKwA0Thmm7ig_psp0fRkoGqzgtZ5pRJ6abQhDS_5NJcLSmwvvOVvm_FrfWF9Wt50i7FeBYsg5KrHVB4F68uCs8TqX60MyUXJgRUs4YK1R4ro5Pfo4bn42RsEjyWlniw8ot85aKVL34uuY3R1EzMNy29xwuSfAa7wy5PZrf7vfvBvb_oh9R9IVS4Ry02ZZ0yt5APX-Lh197dpU-glyfcTdJGAIHNKCsFHIeRCZJIH0yTdu86RV6pggIC6wIKqt3bIW_pIOC8Fp7o7Nad136Ou4b8h1EEcw5JkyUYCzuFmUo9rNAVe9WD-lSHAiXKVpojCdRQsUBeb7-5jqDfDWKhwYyAbNG_kpiVfiHDH3po9BnQjA7tyG4FlkjicK9nQG8SJLu_J_QW5gsLP0TIlAYWjZdJAZbFWQQSD4iEmCHZZArfzwyEYzmKaxOwLrIHbGIPeZbUUhMYc1iLEjk5iUQ-nHWOKxEbCAKSlRhLrTkytPKmtOaahPu_QteIW5oSBNskR_dN5LZoRThdpM7alLaUCbuUBengBSoGUlBrEISn7zakSXUuiKwY3PlsuQ8GVcSh4ZyBjoW38hgaNkZeGpO3jFLPpzBCLf5SGP3oGzIiyg5g3j_PvCscbeJ_yc6cbE2Px-U9MX-BIgP1bSFbz5UyvR50Uh332NgUclU73_yB8rNTgOYX7fVK9BlkEZk-LP0zoGtnP06bFmOzwUsiIM8x31HSvrzbSdG2AO9S_YIi66F_oFcntTmtg&uuid=ac23dc66-33b7-45d0-98b3-70dfeaa70ff7&authuser=0'; // replace with your file URL
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

  return(
  <>
<section id="header" className="">
   <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="row">
               
                
         
                   <div className="mt-3">
                 <p>
                 <button onClick={downloadFile} className='m-3 p-2 g-lg-1'>
                 ENCRYPTION USING CEASER CIPHER
    </button>
    <button className='m-3 p-2 g-lg-1' onClick={downloadFile1}>
                 Hacking CIPHER
    </button>
    <button className='m-3 p-2 g-lg-1' onClick={downloadFile2}>
                Ethical Hacking PDF
    </button>
    <button className='m-3 p-2 g-lg-1' onClick={downloadFile3}>
                 SQA PDF
    </button>
                 </p>
                   </div>
              
                <div className="col-lg-6 order-1 order-lg-2 header-img">
              
                </div>
                </div>
                </div>
                </div>
                </div>
   </section>
  
  </>);
}



export default Main;
