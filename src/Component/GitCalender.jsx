import { Box, Flex, Heading } from "@chakra-ui/react";
import GitHubCalendar from 'react-github-calendar';
import image from '../Banner/leetcode.webp'
export default function GitCalender(){
    return (
        <Box  pt='25px' textAlign='center'>
         <Box w='80%'  margin="auto" borderTop="1.5px solid #00796B"></Box>
            <Heading p='25px' color='#00796B' size='2xl'>LeetCode & Github Stats</Heading>
            <Box p='40px 20px' w='97%' m='auto' textAlign='center'>
            <Flex justify='center'  p='45px' className="react-activity-calendar"  color='#00796B' >
            <GitHubCalendar  style={{width:"100%"}} username="gauravsahu9668" />
            </Flex>
            <Flex  mt='40px' flexDirection={{base:'column',sm:'column',md:'column',lg:'row'}} justifyContent='space-around' alignItems='center' gap='25px'>
                <Box >
                    <a href="https://leetcode.com/u/Gaurav116/">
                    <img
  id="github-stats-card"
  src={image}
  alt="Github Status Card"
  style={{ width: '350px', height: '180px', display: 'block' }}
/>
                    </a>
                </Box>
                <Box >
            <img style={{display:'block'}} id="github-streak-stats"  src="https://github-readme-streak-stats.herokuapp.com?user=gauravsahu9668" alt="Github streak stats"/>
            </Box>
            </Flex>
            <Flex  mt='40px'  justifyContent='center'>
              <img display="block" alt="image" id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=gauravsahu9668&layout=compact"/>
                </Flex>
            </Box>
        </Box>
    )
}