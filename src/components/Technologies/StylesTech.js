import styled from "styled-components";

export const SectionTech = styled.section`
  background: rgb(48 79 60 / 0.9);
  width: 100%;
  height: 600px;
  margin: 0 auto;
  padding: 10rem;
  height: 100%;
  position: relative;
	/* max-height: 600px; */
	width: 100%;
	background-color: rgb(48, 79, 60, 0.5);
	background-image:		
		url('https://78.media.tumblr.com/cae86e76225a25b17332dfc9cf8b1121/tumblr_p7n8kqHMuD1uy4lhuo1_540.png'), 
		url('https://78.media.tumblr.com/66445d34fe560351d474af69ef3f2fb0/tumblr_p7n908E1Jb1uy4lhuo1_1280.png'),
		url('https://78.media.tumblr.com/8cd0a12b7d9d5ba2c7d26f42c25de99f/tumblr_p7n8kqHMuD1uy4lhuo2_1280.png'),
		url('https://78.media.tumblr.com/5ecb41b654f4e8878f59445b948ede50/tumblr_p7n8on19cV1uy4lhuo1_1280.png'),
		url('https://78.media.tumblr.com/28bd9a2522fbf8981d680317ccbf4282/tumblr_p7n8kqHMuD1uy4lhuo3_1280.png');
	background-repeat: repeat-x;
	background-position: 
		0 20%,
		0 100%,
		0 50%,
		0 100%,
		0 0;
	background-size: 
		2500px,
		800px,
		500px 200px,
		1000px,
		400px 260px;
	animation: 50s para infinite linear;
	

@keyframes para {
	100% {
		background-position: 
			-5000px 20%,
			-800px 95%,
			500px 50%,
			1000px 100%,
			400px 0;
		}
	}
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align:center;
  flex-shrink: unset;

`;
export const SpanTitles= styled.span`
  min-width:200px;
  margin-bottom: 3rem;
  color: white;
  background: #000;
  font-weight: 700;
  letter-spacing: 0.1em;
  height: 44px;
  font-size: 1.4rem;
  background: rgba(0, 0, 0, .7);
  border-radius: 10px;
  border: 2px solid var(--white);
`
export const TitleTech = styled.h3`
  margin: 3rem;
  text-align: center;
  margin: 0 auto;
  font-size: 1rem;
  text-transform: uppercase;
`;
export const ImgTechContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-content: center;
    place-items: center;
    align-items: center;
    gap: 4rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 2fr);
    place-content: center;
    place-items: center;
    align-items: center;
    gap: 3rem;
  }
`;
export const TechInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`
export const Img = styled.img`
  width: 160px;
  height: 140px;
  
`;
