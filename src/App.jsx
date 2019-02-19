import React, { Component } from 'react';
import './style.scss'
import {
    Table,
    Input,
    Button,
    Icon
} from './ui'

import Count from './example/comp'


const columns = [
     {
        type: 'index',
        // fixed: 'left'
    },
    {
        type: 'checkbox',
        // fixed: 'left',
    },
    {
        type: 'expand',
        // fixed: 'left',
        content: (obj) => (
            <div>
                {obj.job}
                <hr/>
                12313
                <hr/>
                <h1>abc</h1>
            </div>
        )
    },
    {
        label: '姓名',
        prop: 'name',
        // width: 10

    },
    {
        label: '年龄',
        prop: 'age',
        needSort: true

    },
    {
        label: '工作',
        prop: 'job',

    },
    {
        label: '备注',
        prop: 'note',
        width: 120

    }, {
        label: '备注',
        prop: 'note',

    }, {
        label: '备注',
        prop: 'note',

    },
     {
        label: '备注',
        prop: 'note',
        // width: 720

    },
     {
        label: '备注',
        prop: 'note',
        // fixed:'left',
    },
     {
        label: '备注',
        prop: 'note',
        // fixed:'right',

    }
]
const rows = [
    {
        name: '李十三',
        age: '1',
        job: 'bug制造师1',
        note: '娃娃啊沙发沙发士大夫 士大夫撒是否是 士大夫是士大夫'
    },
    {
        name: '李十三',
        age: '2',
        job: 'bug制造师2',
        note: '娃娃啊沙发沙发士大夫 士大夫撒是否是 士大夫是士大夫'

    },
    {
        name: '李十三',
        age: '3',
        job: 'bug制造师3',
        note: '娃娃啊沙发沙发士大夫 士大夫撒是否是 士大夫是士大夫'

    },
    {
        name: '李十三',
        age: '4',
        job: 'bug制造师4',
        note: '娃娃啊沙发沙发士大夫 士大夫撒是否是 士大夫是士大夫'
    },
]
const rowsTwo = [
    {
        name: '李十三',
        age: '22',
        job: 'bug制造师',
        note: '娃娃啊沙发沙发士大夫 士大夫撒是否是 士大夫是士大夫'
    },
    {
        name: '李十三',
        age: '221',
        job: 'bug制造师',
        note: '娃娃啊沙发沙发士大夫 士大夫撒是否是 士大夫是士大夫'

    },
    {
        name: '李十三',
        age: '21232',
        job: 'bug制造师',
        note: '娃娃啊沙发沙发士大夫 士大夫撒是否是 士大夫是士大夫'

    },
    {
        name: '李十三',
        age: '12213123213123',
        job: 'bug制造师',
        note: '测试士大夫士大夫士大分开了沙发了逻辑零六十飞机圾斯大林拉萨机了解了十大'
    },
]


class App extends Component {
  constructor(props) {
    super(props)
         let arr = [...rows,...rows,...rows,...rows,...rows,...rows,...rows,...rows,...rows,...rows,...rows,...rows,...rows,...rows,...rows,...rows,...rows,...rows,...rows,...rows,...rows,...rows,...rows,...rows,...rows,...rows,...rows,...rows,...rows,...rows,...rows,...rows,...rows,...rows,...rows,...rows,...rows,...rows,...rows]
         arr = arr.concat(arr)
         let ar = [...arr,...arr,...arr,...arr]

    this.state = {
        rows: [],
        index: 0
    }
  }
  componentDidMount() {
      const obj = {
          x: 123
      }
      console.log(Object.create(null))
      console.log(Object.create(obj))
      
      function X () {
          this.name = 'xx'
      }
      X.prototype.print = function() {
          console.log(this.name)
      }

      function SubX () {

      }
    //   SubX.prototype = Object.create(x.prototype)

      function F() {}
      F.prototype = X.prototype
      SubX.prototype = Object.create(X.prototype)
      SubX.prototype.constructor = SubX

      console.log(new SubX)

      console.log({p: Object.getPrototypeOf(X)})
      console.log(X.prototype)
      console.log({X})
      function x(){}
      console.log({x})
      console.log({x: new Function('x')})

      console.log({})

      
      

  }
  handleClick(){
      this.setState({
          rows: this.state.rows.concat(rowsTwo)
      })
  }
  change() {
      this.setState({
          index: this.state.index+1
      })
  }


  render() {
      const index = this.state.index%2 
      let str = ''
      switch(index) {
          case 0:
          str = '_up';
          break
          case 1:
          str = '_down'
          break
          
      }
    return (
      <div className="App">
      <div style={{background: 'red',lineHeight: '20px',}}>
          <span style={{lineHeight: '20px',display:'inline-block',background:'black'}}>123213213</span>
      </div>
        <Button  onClick={this.handleClick.bind(this)}>{'click'}</Button>
        <Input/>
        <Table 
            columns={columns} 
            rows={this.state.rows}
            // type={'tile'}
            dragAble={true} 
            // tableHeight={800}
            // loading={true}
            // fixedRows={[ {
            //     name: '李十三',
            //     age: '12213123213123',
            //     job: 'bug制造师',
            //     note: '测试士大夫士大夫士大分开了沙发了逻辑零六十飞机圾斯大林拉萨机了解了十大'
            // }, {
            //     name: '李十三',
            //     age: '12213123213123',
            //     job: 'bug制造师',
            //     note: '测试士大夫士大夫士大分开了沙发了逻辑零六十飞机圾斯大林拉萨机了解了十大'
            // },]}
        />

        <Icon type='arrow-fill' className={str} onClick={this.change.bind(this)}></Icon>
    
        <Count/>
      </div>
    )
  }
}

export default App
