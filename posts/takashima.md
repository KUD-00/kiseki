---
title: '游白鬚神社'
date: '2022-10-15'
description: ''
image: shirahigejinjia_1.jpeg
---

乘湖西线在近江高島駅下车，向南沿着湖边行进

路上路过废弃的日吉神社

路途需要三十分钟，白鬚神社门口就是环湖公路，充满了尘世的喧嚣，看介绍好像这里供奉的神明是交通神，这么想还挺应景的

这里最有意思的就是水中的大鸟居。在水里的鸟居不太多见，如果是夕阳西下或者朝日东升的时候可能能看到很漂亮的景色，不过我去的时候是正午，阳光很强，拍出来的照片几乎看不出来鸟居的红色

我来到寺庙或者是神社是肯定要抽签的，ガチャ瘾是很难戒掉的，在这里抽了一个“吉”，希望一切都顺顺利利吧

> 玉ちほう　かみのめくみの風うけて　もえ出で　にけりのべの　若草

这是御神签上面写的话，我看不大懂

---

## 注意事项
沿着湖边公路走的时候，不要在海的一侧走，因为神社在另一侧。几乎没有人行横道可以穿过这条车流量比较多的道路，我当时等了好久才过街（横穿马路）。

---
## 参考链接
[主页](http://shirahigejinja.com)

I paste some code to test code block here
```
export const getStaticProps = () => {
  const files = fs.readdirSync('posts');
  const posts = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fileContent = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data, content } = matter(fileContent);
    return {
      frontMatter: data,
      slug,
    };
  });
  return {
    props: {
      posts,
    },
  };
};
```

Test math render here
$C_L$
