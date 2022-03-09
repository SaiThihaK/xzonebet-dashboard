import {  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import axios from "axios";
import React,{useEffect, useState} from "react";
import { Avatar } from "rsuite";
import { Currency } from "../../../../services/api-services";




const CurrencyExchange = () => {
const [currency,setCurrency] = useState({});
const [coun,setCoun] = useState([]);


  const FetchCurrency = async()=>{
    const response = await  axios.request(Currency);
    console.log(response.data.conversion_rates);
    setCurrency(response.data.conversion_rates)
  };
  const FetchCountries = async()=>{
    const response = await axios.get(`https://v6.exchangerate-api.com/v6/f08f01b448f9b740baf0b750/codes?fbclid=IwAR0xRGVSUAcXp3BvTieGvgNtB3KmaIKCgvIvGkPV6yG2B_ZWHWf_SpVCLJw`);
    console.log(response.data.supported_codes);
    setCoun(response.data.supported_codes);
  }
  useEffect(()=>{
  FetchCurrency();
  FetchCountries();
  },[]);
  return (
    <div style={{padding:"0px 20px"}}>
        <h1  style={{display:"flex",justifyContent:"center",alignItems:"center"}}>Currency Exchange</h1>
        <TableContainer component={Paper} style={{marginTop:20}}>
        <Table  aria-label="simple table">
        <TableHead>
            <TableRow></TableRow>
          </TableHead>
          <TableBody>
           
            {
              Object.keys(currency).map((c,index)=>(
                <TableRow key={index}>
                <TableCell align="left" >
                  <Avatar src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8PDw8QDw8QEBAPDw8NDxAPDw0PFREWFhUSFRUYHSggGBolGxYVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFw8QFysdHR0tKystLSsrKy0tLS0tLS0tLS0tLS0uKy4tLS0tLS0tLS0tLS0tLS0tLS8tLS0tKy8tLf/AABEIALcBEwMBEQACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAAAQIEBwMFBgj/xABLEAACAQIBBQkKCwUJAQAAAAAAAQIDBBEFBgcSIRYxQVNUgZKT0RMXIjJRcnORsdIUQlJhcaKys8HC4SQlNIKDMzVEYmN0lKPiFf/EABoBAQEAAwEBAAAAAAAAAAAAAAABAgMEBgX/xAA2EQEAAQEFBQUIAgAHAAAAAAAAAQIDERMVUgQxUZGhBRIU0eEhMkFTYXGx8DNyIiMkNEJigf/aAAwDAQACEQMRAD8A3iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcMqj1mvmT+faWI9g8RlDO26p1q1NdzwhVqQWMHjhGbSx2+RHxbXb7WmuqmLvZM/D1emsOyLCuyorm++Yid/GPsxZZ6Xflp9D9TVPadt9OTdHYmz/Xn6IWet5/pc9N+8Y5nb/TlPmuSbNxq5x5LrPi74Y0ehP3jKO1LbhHKfNjkWz8auceSyz5uuLo9GfvFzS10x180yKw1VdPJZZ9XPFUfVPtLmlppjqmQ2Ourp5Dz6ueKo+qfaM0tNMdTIbHXV08kPPm54uj6pdozS10x1MisNVXTyRu4uvkUejLtJmlrwjr5rkVhqq6eSyz5uOLpPml2lzS00x1Y5FY6qunkss+q/FUvr9pc0r0wmRWWueid3VfiaX1+0uaV6YMis9c9E7uq3E0vr9ozSvTCZFZ656J3d1uJp+uQzSvTHMyGz1zyg3d1eIp9OQzWrRHNMho+ZPIeflbiKfSkM1q0RzXIaPmTyRu7rcTS9chmlemOZkNnrnlD2eSrl1qFGrJJOpTjNpbybWOCPrWNffs6a+MRLz+0WcWdrXZx/xmY5Mo2NIAAAAAAAAAAAAAAAAAY1Xx/wCWPtkZxuT4tU5bf7Vc+nrfeSPJ7T/NX95/L3uxx/p7P+sfhhGh0oCpCABACgAAATiAABEgQAKJA2zm7/B23oaf2Uen2b+Gj7R+HhNt/wBzaf2n8uxN7mAAAAAAAAAAAAAAAAADHqeO/Nj7ZGcbk+LU+Xlhd3Pp6v22eT2r+av7y99sXt2az/rH4YSNDpSEAABAAAAAAKAEgAgACpRUbYzbeNnbeiivUsD0+y/w0faHhdui7abT7y7I3uUAAAAAAAAAAAAAAAAAMep4782PtkZRuT4tV5yxwvLj0sn69p5bbI/z6/u932fN+y2f2h15zOsAACgiCSiAGAEgMAicAGADAAUMAJSEJLaOaMsbKh8ymvVOSPS7HN9hS8V2lF21V/vwh3B0uEAAAAAAAAAAAAAAAAAOCS8N+bH2syjcnxeTytmjKtcVKqrqKnLWw7m3hsX+Y+Xbdmza1zX37r/p6vvbN21TY2VNn3L7vr6OHcI+UrqX7xqyn/v09W7P4+X19DcHLlK6l+8MpnX09TP4+X19EPMSfKI9W1+JMpnX09Vz6n5c8/RXcLPj4dB9oyqdfRc+o+XPNKzGnyiHVvtGUzr6eqZ9R8ueZuHnyiHVvtLlU6+hn1Hy55ury5ka3sYKpd39GjF46qlCTnPD5ME3KXMjKnsaurdV09Vz6j5c83nI5YybisbypCLbSnUsbmMHqy1ZbcOBvB7NnCbMhtdUfv8A6Z/R8ueb1lhmrG4pxq0LyjWpS8WdJa0H5dqZqnsiun2TV0M+o0TzZO4erx9PoyJldWqFz2z0TzhO4erx1PoyJlVWqEz2z0Tzg3D1OOh0ZDK6tUGe2eiecG4erx1PoyGV1aoM9s9E9DcNV46n0ZDK6tULntnonobhqvHU+jIZXVqgz2z0T0WjmNU4+HRkMrq1MZ7do0TzeqyFYu3oRouSk4uXhJYJ4vH8T6VhZYVnFF99z4m128W9tNpEXX3fh2BucwAAAAAAAAAAAAAAAAAcL8d+bH2sy+CSSW0sbkWRBJAAFVAHUZ15bhk+zr3c1rdyj4EOMqyajCHPJrmxNlnR36opSZa7tbKNt+8cpKNzlKoo3ElWjst4RkpQpU6c9ihg1FVFshNxxe3Z1TPe/wAFHsj9/fsxvcNtnpb1XG31lUjqqjjVpupCrqwdGOtDDw01OdTV35OEY78kWbGY9peyIzjkm4pZQtU4WFzWjb5Qt1LXpUZSerCspLwFUWD19VtJ+Dw4uTGJE0zvjcXtsI4WawAgkABIUIiIfG+n8EFWAAAAAAAAAAAAAAAAAAHC/Hfmx9sjL4JJLfCLICQAACAPB6Xm1aWbf9kspWrr7dVKlhPa3wLHV2nTs13en7Sxqee0kKfc5LVWrFxlqRjKCSlsjJQjWnGDeOCcoQctqWJusN7GWtbGMJ1FGNPWlKaUU1s8J6uq0njPFvyYvFLbikdc7kbJzwx/+LWjJKpOrKlQo7JOU6ndY404SlXqOOGG2DUcMGsFgcll/J++TL4NtW0HGEYva1GKb8rS2nDLNymKpAAAJAEEU97nl7WFWAAAAAAAAAAAAAAAAAAHC/Hfmx9sjKNySiW+WNzFOIE4kUxAawEYgdVnPkanlCzr2lV4RrRwUksXTmmnCaXDhJJ4cJss6poqiqElrSOW1QUbDLUFQuKSkoVKi/Zb+KjJuUZKKinU8CMpy2uLlHY5SOzuX/4rPd+GCJXWRbXGbu7aqsE/BwrTrvUo04qUIptxnH4TGWzZ3THZsF1pV8Lv2fQ9jus38k3GU7qjfXdKpb2Nq1KytrjB3FzUjrdzuKzwUvBi0lrYvYvnc9ddcUUzTTvnesQ2OmcbNOIE4gSmQMQJTCpTAinvc8vayKsAAAAAAAAAAAAAAAAAAMetLCT81e1mdMMamodIGeuUbTKNajQuNSlGNFxh3KjLV1qUW9sot7+L3zVXXMTdDmrrq73sl5p6ScrY/wAX6qFv7hjiVMe/VxStI2VuWPqbf3BiVHfq4rrSRlZf4r10Lf3BiVGJVxXWkvK3KIv+hQ90YlRiVLd83KvHw6ij2DEkxKjvnZV46n1FLsGLUYlThu9Il/Wg4Vvg1WD34VbWlUi/5WsDKLaqNy4lTBsc7a1CWvQt7CjPgnSsLeElzqOJlVtFpO+UxKnax0n5V42k/wChAwxZXEqcq0o5T+XR6ldpMWTFqStKeU/lUOp/UYkmLUlaVMp+Wh1P6jEkxajvq5T8tv1P/oYkmLUnvq5T8tDqf1GJJi1HfVyn8qh1P6jEkxaloaUspv49HmortJiSYtTb2Z2UKl1YW9eq06lRTcnFaqxVSS3uY2RN8Oqib6YmXclZAAAAAAAAAAAAAAAAABiXb2v6I+1myhhW+fdKk8cr3PmW/wBxA0WvvS5q97x5rYrIiSuBIRIACAqQiUwK6wVDkAxAKQFsQiE9oHLSe0D6P0dr91WfmTf/AGyN9O522fuw9GVmAAAAAAAAAAAAAAAAAGFe/G82P2mbKGFb570of3vc/PG3+4gvwNNt70uave8qomlgvCAJlzKmGN6e5kL09zAjuZS9HcyF46ZRCgFvQ6YL1XABqAQ4hb04BEJbQOaktoH0ho/WGS7P0X55G+nc7bP3YehKzAAAAAAAAAAAAAAAAADDu9+fo17ZGyhhU0HpUpfvWT+VQt5fVcfymm39+XLXvebjbmiWtyRo/MByxpBFnSQBUkAlQAlUChG3II+DgVlbFFZWhBR2wLx2u0CkrVgvV+DMLevTovHnKl76NzGWGTLL0MX68Wb6dzvs/dh3pWYAAAAAAAAAAAAAAAAAY9ejJy1oyitmDUoOWPqkvKZRNyTF7xmcmjeF/cK4ndSpyVONPVp0lq4RlJp7ZN/GMK4783y1VWETN97B70lHllXq4dpjhwnh6eKr0R0+C9mvpoRf5iYcJ4eOItE0eWy/46X5xhweHjit3p6fLJdQveLhweHjistE9LhvKnNSivxGHB4eOKz0U0eV1Oqh2jDhfD08UrRTR5XV6uAw4PD08Vlorob/AMKrdCA7kHh6eJ3qrflVboUxhweHp4yd6q35VW6NPsGHB4enjKHopt+VVuhT7Bhwnh6eMqvRPQ5XW6ECYcHh6eMqy0T0uC8qL6aUX+JcOF8PHFR6J48F6+e3T/OTDhPDxxcfel2/xyw/2u37wYZ4eOLljonhw3jf0UEvzl7kHh44ve5IsVbW9GgpaypQjBSawcsFv4GcexviLouZgUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/2Q==' alt="flag" size="sm" style={{width:"20px",height:"20px"}} />
                </TableCell>
                <TableCell>
                  {coun.map((cu)=>{
                    if(cu[0]==c){
                      return cu[1];
                    }
                  })}
                </TableCell>
                <TableCell align="left">
                  {c}
                </TableCell >
                <TableCell align="left">
                  =
                </TableCell>
                <TableCell align="left">
                {currency[c]+""+"MMK"}
                  </TableCell>
                  </TableRow>
              ))
            }
              
            
            </TableBody>
        </Table>
        </TableContainer>
    </div>
  );
};

export default CurrencyExchange;