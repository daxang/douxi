import React from 'react'
import React,{useState} from 'react'
import Head from 'next/head'
import { Layout } from 'antd'
import { Row, Col,Divider,Tab,List } from 'antd'
import { Input } from 'antd';
import { Menu } from 'antd';

const { Header, Footer, Sider, Content  } = Layout;
const { Search } = Input;
const { SubMenu } = Menu;
const { TabPane } = Tabs;
import  '../components/index.css'

const [ mylist , setMylist ] = useState(
  [
    {title:'50元加入小密圈 胖哥带你学一年',context:'50元跟着胖哥学一年，掌握程序人的学习方法。 也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。 你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。 我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。 如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，我也会第一时间给你解答。我需要先感谢一直帮助我的小伙伴，这个博客能产出300多集免费视频，其中有他们的鼎力支持，如果没有他们的支持和鼓励，我可能早都放弃了。 原来我博客只是录制免费视频，然后求30元的打赏。 每次打赏我都会觉得内疚，因为我并没有给你特殊的照顾，也没能从实质上帮助过你。 直到朋友给我介绍了知识星球，它可以专享加入，可以分享知识，可以解答问题，所以我如获珍宝，决定把打赏环节改为知识服务。我定价50元每年，为什么是50元每年？因为这是知识星球允许的最低收费了。'},
    {title:'React实战视频教程-技术胖Blog开发(更新04集)',context:'50元跟着胖哥学一年，掌握程序人的学习方法。 也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。 你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。 我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。 如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，我也会第一时间给你解答。我需要先感谢一直帮助我的小伙伴，这个博客能产出300多集免费视频，其中有他们的鼎力支持，如果没有他们的支持和鼓励，我可能早都放弃了。 原来我博客只是录制免费视频，然后求30元的打赏。 每次打赏我都会觉得内疚，因为我并没有给你特殊的照顾，也没能从实质上帮助过你。 直到朋友给我介绍了知识星球，它可以专享加入，可以分享知识，可以解答问题，所以我如获珍宝，决定把打赏环节改为知识服务。我定价50元每年，为什么是50元每年？因为这是知识星球允许的最低收费了。'},
    {title:'React服务端渲染框架Next.js入门(共12集)',context:'50元跟着胖哥学一年，掌握程序人的学习方法。 也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。 你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。 我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。 如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，我也会第一时间给你解答。我需要先感谢一直帮助我的小伙伴，这个博客能产出300多集免费视频，其中有他们的鼎力支持，如果没有他们的支持和鼓励，我可能早都放弃了。 原来我博客只是录制免费视频，然后求30元的打赏。 每次打赏我都会觉得内疚，因为我并没有给你特殊的照顾，也没能从实质上帮助过你。 直到朋友给我介绍了知识星球，它可以专享加入，可以分享知识，可以解答问题，所以我如获珍宝，决定把打赏环节改为知识服务。我定价50元每年，为什么是50元每年？因为这是知识星球允许的最低收费了。'},
    {title:'React Hooks 免费视频教程(共11集)',context:'50元跟着胖哥学一年，掌握程序人的学习方法。 也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。 你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。 我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。 如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，我也会第一时间给你解答。我需要先感谢一直帮助我的小伙伴，这个博客能产出300多集免费视频，其中有他们的鼎力支持，如果没有他们的支持和鼓励，我可能早都放弃了。 原来我博客只是录制免费视频，然后求30元的打赏。 每次打赏我都会觉得内疚，因为我并没有给你特殊的照顾，也没能从实质上帮助过你。 直到朋友给我介绍了知识星球，它可以专享加入，可以分享知识，可以解答问题，所以我如获珍宝，决定把打赏环节改为知识服务。我定价50元每年，为什么是50元每年？因为这是知识星球允许的最低收费了。'},
  ]
)

function callback(key) {
  console.log(key);
}

const Home = () => (
  <>
    <Head>
      <title>readthis</title>
    </Head>
    <Layout>
      <div className="head">
        <Row className="top-row" gutter={24}>
            <Col span={6} className="top-col">
            <Header className="toptitle">LessReads</Header>
            </Col>
            <Col span={12} className="top-col ">
            <Search className="search" placeholder="输入要搜索的书名或推荐人" style={{width:500}} onSearch={value => console.log(value)} enterButton />
            </Col>
            <Col span={6} className="top-col">
              <div className="email">
              <span>Ask me anything</span>
              <br />
              <span>soemailtome@gmail.com</span>
              </div>
            </Col>
          </Row>
        </div>
    
      <Divider />
      <Content >
        <Row >
          <Col span={2} className="content-col">
          </Col>

          <Col span={16} className="content-col" style={{background:"#FFFFFF"}}>

            <Tabs defaultActiveKey="1" onChange={callback}>
              <TabPane tab="非虚构" key="1">
                <div className="content-list">
                  <div className="content-list-top">
                    <div className="content-list-img">
                    <img width="100px" src="https://img3.doubanio.com/view/subject/m/public/s2352093.jpg" />
                      </div>

                    <div className="content-list-content">
                      <div className="recwords" float="left">
                        What’s so striking about Diane is how incredibly modest she is about what she’s accomplished.
                        And she doesn’t make any grand claims that she has all the answers. Much of the book is deeply
                        personal. Diane shares stories of her childhood, growing up in a troubled family. She recounts her years as a young, idealistic teacher and administrator. And she opens-up about her own experience as 
                        a parent, raising her teenage son, Rett, as he navigates his path to adulthood.
                          </div>

                      <div className="tips">
                        <span className="celebrity">比尔盖茨</span>
                        <span>微软创始人</span><span>慈善家</span>
                        <span className="links">Blog</span><span  className="links">推特</span><span  className="links">微博</span>
                        </div>

                        </div>
                        </div>

                  <div className="source">
                  <span >书籍简介</span>
                  <span className="source-links" >电子书一</span>
                  <span className="source-links">电子书二</span>
                  <span className="source-links">有声书</span>
                  </div>
                    </div>
               <Divider style={{marginBottom:5}} />
              </TabPane>
              <TabPane tab="虚构" key="2">
                Content of Tab Pane 2
              </TabPane>
             
            </Tabs>

        

           

          </Col>
           
          <Col span={6}  className="content-col" ></Col>

          
         </Row>,
        

      </Content>


      <Footer>Footer</Footer>


    </Layout>
 </>
)

export default Home