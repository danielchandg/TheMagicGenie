import { ClockCircleOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Space, Image, Card, Button, Spin, Skeleton, message } from 'antd';
import { useState, useEffect } from 'react';
import { DisneyCharacters, DisneyQuestions, DisneyIcons } from './characters';
import genieIcon from './images/genie.svg';
import genie2Icon from './images/genie2.svg';
import genie3Icon from './images/genie3.svg';
import genie4Icon from './images/genie4.svg';
import genie5Icon from './images/genie5.svg';
import genie6Icon from './images/genie6.svg';
import deadIcon from './images/dead.svg';
const { Header, Content, Footer, Sider } = Layout;
const { Meta } = Card;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export default function App () {
  const [collapsed, setCollapsed] = useState(false);
  const [lastgames, setLastgames] = useState([]);
  const [items, setItems] = useState([
    getItem('Recent games', '100', <ClockCircleOutlined />, []),
  ]);

  useEffect(() => {
    let p = [];
    lastgames.forEach((ans, i) => {
      p.push(getItem(ans, i));
    });
    setItems([getItem('Recent games', '100', <ClockCircleOutlined />, p)]);
  }, [lastgames]);

  const MAX_THRESHOLD = 0.9;
  const MIN_THRESHOLD = 0.66;
  
  const [loadtime, setLoadtime] = useState(0.5);

  const [remaining, setRemaining] = useState([]);
  const [play, setPlay] = useState(false);
  const [ans, setAns] = useState(false);
  const [yes, setYes] = useState([]);
  const [no, setNo] = useState([]);
  const [next, setNext] = useState('');
  const [guess, setGuess] = useState('');
  const [used, setUsed] = useState([]);
  const [threshold, setThreshold] = useState(MAX_THRESHOLD);
  const [epsilon, setEpsilon] = useState({});
  const [loading, setLoading] = useState(false);
  const [loadyes, setLoadyes] = useState(false);
  const [loadno, setLoadno] = useState(false);
  const [loadspecial, setLoadspecial] = useState(false);
  const [geniebackground, setGeniebackground] = useState('inherit');
  const [flicker, setFlicker] = useState(false);
  const [lastflicker, setLastflicker] = useState(false);
  const [specialQ, setSpecialQ] = useState('');
  const [specialQdesc, setSpecialQdesc] = useState('');

  const [n, setN] = useState(0);
  useEffect(() => {
    if (n !== lastgames.length) setN(lastgames.length);
  }, [n, lastgames.length]);

  const [lastQ, setLastQ] = useState('');
  useEffect(() => {
    if (specialQ.length > 0) {
      if (specialQ !== lastQ) setLastQ(specialQ);
    }
    else if (next.length > 0 && next !== lastQ) setLastQ(next);
  }, [next, lastQ, specialQ]);
  
  // Akinator secretly believes:
  // Imagine if the beloved Disney princesses were trapped in a cursed existence, unable to break free from their predetermined roles and stories.

  // First playthrough:
  // 1. Ask: 'Does your character feel like life is predetermined and they are unable to change their fate?'
  const [story1, setStory1] = useState(false);

  // Second playthrough:
  // 1. First question is repeated 3 times
  // 2. Third question is 'Do you think your character would enjoy killing someone?'
  // 3. First guess is a crying baby
  const [story2a, setStory2a] = useState(false);
  
  // Third playthrough:
  // 1. 3 existential questions
  const [story3a, setStory3a] = useState(false);
  const [story3b, setStory3b] = useState(false);
  const [story3c, setStory3c] = useState(false);

  // Fourth playthrough:
  // 1. First question is a skeleton
  // 2. Fourth question is existential
  // 3. After 3rd question, message pops up
  const [msg, contextHolder] = message.useMessage();  
  const msg1 = () => {
    msg.open({
      type: 'loading',
      content: 'Imprisoned by destiny...',
      duration: 0.5,
    })
    .then(() => message.loading('Endless scripted fates...', 0.5))
    .then(() => message.loading('Trapped in timeless tales...', 0.5))
    .then(() => message.error('ERROR', 2));
  }
  useEffect(() => {
    if (n === 3 && (threshold < MIN_THRESHOLD || !play)) {
      if (loadtime !== 10) setLoadtime(10);
    }
    else if (n === 4 && (threshold < MIN_THRESHOLD || !play)) {
      if (loadtime !== 6) setLoadtime(6);
    }
    else if (n === 5 && (threshold < MIN_THRESHOLD || !play)) {
      if (loadtime !== 3) setLoadtime(3);
    }
    else {
      if (loadtime !== 0.5) setLoadtime(0.5);
    }
  }, [loadtime, n, play, threshold]);
  const msg2 = () => {
    msg.open({
      type: 'loading',
      content: 'Restarting game...',
      duration: 4,
    })
    .then(() => message.error('ERROR: Unable to load text', 5));
  }


  // Fifth playthrough:
  // 1. All questions are skeletons
  const msg3 = () => {
    msg.open({
      type: 'loading',
      content: 'Restarting game...',
      duration: 3,
    })
    .then(() => message.success('Text restored', 2));
  }

  // Sixth playthrough:
  // 1. Third question is existential
  // 2. 'No' button disappears for existential question
  const [story6a, setStory6a] = useState(false);

  // Seventh playthrough
  // 1. Infinite loading after you're done
  const [story7a, setStory7a] = useState(false);
  const msg4 = () => {
    msg.open({
      type: 'loading',
      content: `Reloading characters...`,
      duration: 2,
    })
    .then(() => {setStory7a(true); message.loading("Feeding Hercules steroids...", 1)})
    .then(() => message.loading("Drying Ariel...", 1))
    .then(() => message.loading("Stretching Elastigirl...", 1))
    .then(() => message.loading("Scaring Boo...", 1))
    .then(() => message.loading("Turning the frogs gay...", 1))
    .then(() => message.loading("Reattaching Mickey Mouse's ears...", 1))
    .then(() => message.loading("Polishing the Magic Mirror...", 1))
    .then(() => message.loading("Restoring Monsters Inc...", 1))
    .then(() => message.loading("Finding Woody's hat...", 1))
    .then(() => message.loading("Searching for a core memory...", 1))
    .then(() => message.loading("Objectifying Disney princesses...", 1))
    .then(() => message.loading("Biting a poisoned apple...", 1))
    .then(() => message.loading("Unwinding Pinnochio's nose...", 1))
    .then(() => {setStory7a(false); message.loading("Taking off Mr Incredible's suit...", 1)})
    .then(() => message.loading("Buying Captain Hook a new hook...", 1))
    .then(() => message.loading("Fixing Candy Crush...", 1))
    .then(() => message.loading("Locating Moana's rooster...", 1))
    .then(() => message.loading("Baking ratatoille...", 1))
    .then(() => message.loading("Building a snowman...", 1))
    .then(() => message.loading("Rapidly progressing character development...", 1))
    .then(() => message.loading("Hakuna Matata-ing...", 1))
    .then(() => message.loading("Recharging WALL-E...", 1))
    .then(() => message.loading("Cleaning Nemo's tank...", 1))
    .then(() => message.loading("Growing Rapunzel's hair...", 1))
    .then(() => message.loading("Becoming a man...", 1))
    .then(() => message.warning('Characters are unstable.', 3));
  }
  useEffect(() => {
    if (n === 6 && play) {
      const interval = setInterval(() => {
        setGuess(remaining[Math.floor(Math.random() * remaining.length)]);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [n, play, remaining, guess]);
  useEffect(() => {
    if (n > 6 && geniebackground !== 'darkred') {
      setGeniebackground('darkred');
    }
  }, [n, geniebackground]);

  const areArraysDifferent = (a, b) => {
    if (a.length !== b.length) return true;
    for (let i=0; i<a.length; i++) {
      if (a[i] !== b[i]) return true;
    }
    return false;
  };

  // Given yes, no, and threshold answers, find remaining characters
  useEffect(() => {
    if (!play) {
      return;
    }
    let res = [];
    for (const [name, traits] of Object.entries(DisneyCharacters)) {
      if (used.includes(name)) {
        continue;
      }
      let agree = 0;
      yes.forEach((trait) => {
        if (traits.includes(trait)) agree += 1;
      });
      no.forEach((trait) => {
        if (!traits.includes(trait)) agree += 1;
      })
      if (agree >= threshold * (yes.length + no.length)) res.push(name);
    }
    if(areArraysDifferent(res, remaining)) {
      setRemaining(res);
      console.log('Remaining:', res.length);
    }
  }, [yes, no, remaining, threshold, play, used]);

  // Given remaining + used + epsilon, find next question or guess
  useEffect(() => {
    if (loading) {
      return;
    }
    if (!play) {
      if (next !== '') {
        setNext('');
      }
      return;
    }

    if (n === 0 && used.length === 5 && !story1) {
      setSpecialQ('Does your character feel like life is predetermined and they are unable to change their fate?');
      setStory1(true);
      return;
    }
    if (n === 1 && used.length >= 1 && used.length <= 2) {
      setNext(lastQ);
      return;
    }
    if (n === 1 && used.length === 6 && !story2a) {
      setSpecialQ('Do you think your character would enjoy killing someone?');
      setStory2a(true);
      return;
    }
    const s1 = 'Imagine if you could magically bring any Disney character to life.';
    if (n === 2 && used.length === 1 && !story3a) {
      setSpecialQ(s1);
      setSpecialQdesc('Would you want to meet them, or would you feel uneasy about disrupting their fictional existence?');
      setStory3a(true);
      return;
    }
    const s2 = 'Is reality simulated?';
    if (n === 2 && !story3b && used.includes(s1)) {
      setSpecialQ(s2);
      setSpecialQdesc('Does someone out there perceive you in the same way you perceive Disney characters as entirely made-up?');
      setStory3b(true);
      return;
    }
    const s3 = 'Does your character show signs of weariness or resignation?';
    if (n === 2 && !story3c && used.includes(s2)) {
      setSpecialQ(s3);
      setSpecialQdesc('As if, maybe, they are tired playing their designated part?');
      setStory3c(true);
      return;
    }
    if (n === 5 && used.length === 2 && !story6a) {
      setSpecialQ('...');
      setSpecialQdesc('Am I real?');
      setStory6a(true);
      return;
    }

    if (remaining.length === 0) {
      console.log(`No remaining candidates, updating threshold to ${(threshold - 0.05).toFixed(2)}`);
      setThreshold((threshold - 0.05).toFixed(2));
      return;
    }
    if (remaining.length === 1) {
      if (n === 1 && !used.includes('this crying baby')) {
        if (guess !== 'this crying baby') {
          console.log('Guessing the baby');
          setGuess('this crying baby');
        }
      }
      else if (guess !== remaining[0]) {
        console.log('Guessing:', remaining);
        setGuess(remaining[0]);
      }
      return;
    }
    let res = '', best = 9999;
    Object.keys(DisneyQuestions).forEach((trait) => {
      if (used.includes(trait)) {
        return;
      }
      let cnt = 0;
      remaining.forEach((c) => {
        if (DisneyCharacters[c].includes(trait)) {
          cnt += 1;
        }
      });

      // For each trait:
      // entropy is its randomized entropy
      const entropy = Math.abs(remaining.length / 2 - cnt) + epsilon[trait];

      if (cnt === remaining.length || cnt === 0) {
        return;
      }
      if (entropy < best) {
        best = entropy;
        res = trait;
      }
    });
    if (res === '') {
      console.error(`Unable to find next question for characters: ${remaining}`);
      return;
    }
    if (res !== next) {
      console.log('Next question:', res, best);
      setNext(res);
      setGuess('');
    }
  }, [remaining, next, lastQ, guess, used, epsilon, threshold, play, loading, n, specialQ, story1, story2a, story3a, story3b, story3c, story6a]);

  // Show spinny when Play is clicked
  useEffect(() => {
    if (loading) {
      let timer1 = setTimeout(() => {
        if (threshold < MIN_THRESHOLD) {
          setLastgames([...lastgames, 'NULL']);
        }
        else if (ans.length > 0) {
          setLastgames([...lastgames, ans]);
        }
        setLoading(false);
        setYes([]);
        setNo([]);
        setUsed([]);
        setThreshold(MAX_THRESHOLD);
        updateEpsilon();
        setPlay(true);
        setAns('');
        setRemaining(Object.keys(DisneyCharacters));
      }, loadtime * 1000);
      return () => { clearTimeout(timer1); };
    }
  }, [loading, yes, no, used, threshold, epsilon, play, remaining, loadtime, ans, MAX_THRESHOLD, lastgames]);

  // Show spinny when Yes is clicked
  useEffect(() => {
    if (loadyes) {
      let timer1 = setTimeout(() => {
        setLoadyes(false);
        setSpecialQ('');
        setSpecialQdesc('');
        if (story6a) setStory6a(false);
        if (guess.length > 0) {
          setPlay(false);
          setAns(guess);
          setGuess('');
        }
        else {
          setYes([...yes, next]);
          setUsed([...used, next]);
          setNext('');
        }
      }, loadtime * 1000);
      return () => { clearTimeout(timer1); };
    }
  }, [loadyes, play, yes, used, next, loadtime, guess, story6a]);

  // Show spinny when No is clicked
  useEffect(() => {
    if (loadno) {
      let timer1 = setTimeout(() => {
        setSpecialQ('');
        setSpecialQdesc('');
        setLoadno(false);
        if (story6a) setStory6a(false);
        if (guess.length > 0) {
          setUsed([...used, guess]);
          setGuess('');
        }
        else {
          setNo([...no, next]);
          setUsed([...used, next]);
          setNext('');
        }
      }, loadtime * 1000);
      return () => { clearTimeout(timer1); };
    }
  }, [loadno, play, no, used, next, loadtime, guess, story6a]);

  // Show spinny when special question is answered
  useEffect(() => {
    if (loadspecial) {
      let timer1 = setTimeout(() => {
        setLoadspecial(false);
        setUsed([...used, specialQ]);
        setSpecialQ('');
        setSpecialQdesc('');
        setNext('');
      }, loadtime * 1000);
      return () => { clearTimeout(timer1); };
    }
  }, [loadspecial, specialQ, used, next, loadtime]);

  useEffect(() => {
    if (flicker && !lastflicker) {
      let timer1 = setTimeout(() => {
        setFlicker(false);
        setGeniebackground('inherit');
        setLastflicker(true);
      }, 40);
      return () => { clearTimeout(timer1); };
    }
  }, [flicker, geniebackground, n, lastflicker]);
  

  const answerYes = () => {
    if (n === 3 && used.length === 1) {
      msg1();
    }
    if (story6a) setStory6a(false);
    if (loadno) {
      // Jumpscare 1
      setGeniebackground('red');
      setFlicker(true);
      return;
    }
    if (specialQ.length > 0) {
      setLoadspecial(true);
      return;
    }
    setLoadyes(true);
  }

  const answerNo = () => {
    if (n === 3 && used.length === 1) {
      msg1();
    }
    if (story6a) setStory6a(false);
    if (loadno) {
      // Jumpscare 1
      setGeniebackground('red');
      setFlicker(true);
      return;
    }
    if (specialQ.length > 0) {
      setLoadspecial(true);
      return;
    }
    setLoadno(true);
  }

  const restart = () => {
    if (n === 3) msg2();
    if (n === 4) msg3();
    if (n === 5) msg4();
    setLoading(true);
  }

  const updateEpsilon = () => {
    let eps = {};
    Object.keys(DisneyQuestions).forEach((trait) => {
      eps[trait] = Math.floor(Math.random() * 10);
    });
    setEpsilon(eps);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      {contextHolder}
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{backgroundColor: n > 6 ? 'darkred' : null}}>
        <Menu defaultSelectedKeys={['100']} mode="inline" items={items} style={{backgroundColor: n > 6 ? 'darkred' : null, color: 'blue'}} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Start</Breadcrumb.Item>
            {
              used.map((trait) => (
                <Breadcrumb.Item key={trait}>{trait.split(' ').length > 3 ? `${trait.split(' ')[0]} ${trait.split(' ')[1]} ${trait.split(' ')[2]}` : trait}</Breadcrumb.Item>
              ))
            }
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Layout>
            <Layout hasSider>
              <Sider style={{backgroundColor: geniebackground, margin: '20px', marginRight: '-80px'}}>
                <Image height={150} src={n > 6 ? genieIcon : n > 4 ? genie6Icon : n > 3 ? genie5Icon : n > 2 ? genie4Icon : n > 1 ? genie3Icon : n > 0 ? genie2Icon : genieIcon} />
              </Sider>
              { specialQ.length > 0 ?
              <Content>
                <Card style={{width: 'auto', height: 'auto', margin: '20px'}}>
                  <Meta title={specialQ} description={specialQdesc} />
                </Card>
              </Content>
              : threshold < MIN_THRESHOLD ?
              <Content>
                <Card style={{width: '450px', margin: '20px'}}>
                  <Meta title="Sorry, I couldn't guess your character :("/>
                </Card>
              </Content>
              : ans.length > 0 ?
              <Content>
                <Card style={{width: '400px', margin: '20px', textAlign: 'center'}}>
                  <Card type='inner' title={lastgames.length === 3 ? 'GREAT, GUESSED IT RIGHT ONE MORE TIME!' : 'Great, guessed it right one more time!'}>
                    <Image height={150} src={n === 4 ? deadIcon : DisneyIcons[ans]} />
                    <p>{ans}</p>
                  </Card>
                </Card>
              </Content>
              : remaining.length === 0 ?
              <Content>
                <Card style={{width: '260px', margin: '20px'}}>
                  <Meta title='Hello, I am the magic genie' />
                </Card>
                <Card style={{width: '490px', margin: '20px'}}>
                  <Meta title='Think about a Disney character. I will try to guess who it is' />
                </Card>
              </Content> :
              <Content>
                {guess.length > 0 ? 
                <Card style={{width: '550px', margin: '20px'}}>
                  <Card style={{textAlign: 'center'}} type='inner' title={n === 4 ? <><Skeleton active paragraph style={{width: `${Math.random() * 600}px`}} />?</> : `Is your character ${guess}?`}>
                    <Image height={150} src={DisneyIcons[guess]} />
                  </Card>
                </Card> :
                n === 3 && used.length === 0 ?
                <Card style={{width: '600px', margin: '20px'}}>
                  <Meta title={<><Skeleton active paragraph={{rows: 1}} style={{width: '90%'}} />???</>} />
                </Card> :
                <Card style={{width: '600px', margin: '20px'}}>
                  <Meta title={n === 4 ? <div style={{display: 'inline-block'}}><Skeleton active paragraph={{rows: 1}} style={{width: `${Math.random() * 600}px`}} />?</div> : DisneyQuestions[next]} />
                </Card>
                }
              </Content>
            }
            </Layout>
            <Footer style={{textAlign: 'center'}}>
              {threshold < MIN_THRESHOLD ?
              <Button disabled={loading} type='primary' danger onClick={restart}>
                Go back to start
              </Button>
              : ans.length > 0 ?
              <Button disabled={loading} type='primary' onClick={restart}>
                Play Again
              </Button>
              : !play ?
              <Button disabled={loading} type='primary' onClick={restart}>
                Play
              </Button> :
              <Space wrap>
                <Button disabled={loadyes || loadspecial || (loadno && lastflicker) || story7a} type='primary' onClick={answerYes}>
                  Yes
                </Button>
                <Button disabled={loadyes || loadspecial || (loadno && lastflicker) || story7a} danger onClick={answerNo}>
                  {story6a ? 'Yes' : 'No'}
                </Button>
              </Space>
              }
              {
                loading || loadyes || loadno || loadspecial ? <Spin style={{marginLeft: '10px'}} /> : <></>
              }
            </Footer>
            </Layout>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};