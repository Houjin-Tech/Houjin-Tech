---
date: 2024-03-23
description: 身份证校验码计算方法
tag:
  - python
---

# 身份证校验码计算方法

### 计算方法

1. 将身份证号码从左至右标记为 $a_{1},a_{2},\dots ,a_{18}$ ， 则 $a_{18}$ 即为校验码
2. 计算权重系数 $W_{i}=2^{18-i}\;mod\;11$ ；其中 $mod$ 表示求余数。
3. 计算 $S= \sum_{i=1}^{17} a_{i} \cdot W_{i}$
4. 则 $a_{18} =(12-(S\;mod\;11))\;mod\;11$

### 测试代码

```python
# 0.定义变量含义
W = []  # 权重列表
S = 0   # 权重与每位身份证号的乘积之和
# 1.用户输入18位身份证号
idnum = input("输入18位身份证号:\n")
while len(idnum) != 18:
    idnum = input("输入身份证号")
# 2.计算前17位数的权重系数
for i in range(1,18):
   W.append(2**(18-i) % 11)
print("权重列表 W = %s" % W)
# 3.计算S，即权重与每位身份证号的乘积之和
for i in range(17):
   S += int(idnum[i])*W[i]
print("权重与每位身份证号的乘积之和 S = %d" % S)
# 4.计算a18
a18 = (12-(S%11))%11
if a18 == 10:
    a19 = 'X'
print("身份证末位 a18 = %s" % a18)
```

### 在线运行

<iframe width="800" height="500" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=%23%200.%E5%AE%9A%E4%B9%89%E5%8F%98%E9%87%8F%E5%90%AB%E4%B9%89%0AW%20%3D%20%5B%5D%20%20%23%20%E6%9D%83%E9%87%8D%E5%88%97%E8%A1%A8%0AS%20%3D%200%20%20%20%23%20%E6%9D%83%E9%87%8D%E4%B8%8E%E6%AF%8F%E4%BD%8D%E8%BA%AB%E4%BB%BD%E8%AF%81%E5%8F%B7%E7%9A%84%E4%B9%98%E7%A7%AF%E4%B9%8B%E5%92%8C%0A%23%201.%E7%94%A8%E6%88%B7%E8%BE%93%E5%85%A518%E4%BD%8D%E8%BA%AB%E4%BB%BD%E8%AF%81%E5%8F%B7%0Aidnum%20%3D%20input%28%22%E8%BE%93%E5%85%A518%E4%BD%8D%E8%BA%AB%E4%BB%BD%E8%AF%81%E5%8F%B7%3A%5Cn%22%29%0Awhile%20len%28idnum%29%20!%3D%2018%3A%0A%20%20%20%20idnum%20%3D%20input%28%22%E8%BE%93%E5%85%A5%E8%BA%AB%E4%BB%BD%E8%AF%81%E5%8F%B7%22%29%0A%23%202.%E8%AE%A1%E7%AE%97%E5%89%8D17%E4%BD%8D%E6%95%B0%E7%9A%84%E6%9D%83%E9%87%8D%E7%B3%BB%E6%95%B0%0Afor%20i%20in%20range%281,18%29%3A%0A%20%20%20W.append%282**%2818-i%29%20%25%2011%29%0Aprint%28%22%E6%9D%83%E9%87%8D%E5%88%97%E8%A1%A8%20W%20%3D%20%25s%22%20%25%20W%29%0A%23%203.%E8%AE%A1%E7%AE%97S%EF%BC%8C%E5%8D%B3%E6%9D%83%E9%87%8D%E4%B8%8E%E6%AF%8F%E4%BD%8D%E8%BA%AB%E4%BB%BD%E8%AF%81%E5%8F%B7%E7%9A%84%E4%B9%98%E7%A7%AF%E4%B9%8B%E5%92%8C%0Afor%20i%20in%20range%2817%29%3A%0A%20%20%20S%20%2B%3D%20int%28idnum%5Bi%5D%29*W%5Bi%5D%0Aprint%28%22%E6%9D%83%E9%87%8D%E4%B8%8E%E6%AF%8F%E4%BD%8D%E8%BA%AB%E4%BB%BD%E8%AF%81%E5%8F%B7%E7%9A%84%E4%B9%98%E7%A7%AF%E4%B9%8B%E5%92%8C%20S%20%3D%20%25d%22%20%25%20S%29%0A%23%204.%E8%AE%A1%E7%AE%97a18%0Aa18%20%3D%20%2812-%28S%2511%29%29%2511%0Aif%20a18%20%3D%3D%2010%3A%0A%20%20%20%20a18%20%3D%20'X'%0Aprint%28%22%E8%BA%AB%E4%BB%BD%E8%AF%81%E6%9C%AB%E4%BD%8D%20a18%20%3D%20%25s%22%20%25%20a18%29%0A&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=0&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>
