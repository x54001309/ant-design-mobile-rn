/* tslint:disable:no-console */
import React from 'react';
import { ScrollView } from 'react-native';
import { List, TextareaItem, Button, Flex } from 'antd-mobile-rn';

export default class BasicTextAreaItemExample extends React.Component<
  any,
  any
> {

  inputRef: any;

  constructor(props: any) {
    super(props);
    this.state = {
      val: '默认带value',
    };
  }

  onChange = (val: any) => {
    // console.log(val);
    this.setState({ val });
  }

  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <List renderHeader={() => '基本'}>
          <TextareaItem rows={4} placeholder="固定行数" />

          <TextareaItem rows={4} placeholder="多行带计数" count={100} />

          <TextareaItem rows={4} placeholder="高度自适应" autoHeight style={{ paddingVertical: 5 }} />

          <TextareaItem value={this.state.val} onChange={this.onChange} />

          <TextareaItem value="不可编辑 editable = {false}" editable={false} />

          <TextareaItem clear={false} placeholder="不显示清除按钮" />

          <TextareaItem
            error
            defaultValue="报错样式 error={true}"
            onErrorClick={() => console.log('err')}
          />

          <TextareaItem
              placeholder="测试聚焦"
              ref={(el: any) => this.inputRef = el}
          />

          <List.Item>
            <Flex justify="center">
            <Button
                onClick={() => { this.inputRef.focus(); }}
                type="primary"
            >
                点击获取光标
            </Button>
            <Button
                onClick={() => { this.inputRef.blur(); }}
                type="warning"
            >
                点击失去光标
            </Button>
            </Flex>
          </List.Item>
        </List>
      </ScrollView>
    );
  }
}
