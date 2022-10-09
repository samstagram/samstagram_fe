# <img width="30px" src="https://user-images.githubusercontent.com/69451758/194764808-d6fd7767-afaa-4d41-819c-1a42557f2596.png" /> Samstagram

## Introduce

![sam_sample](https://user-images.githubusercontent.com/69451758/194764686-f8b905c0-2d15-425d-886e-4ecaf9ae444f.jpg)

<img width="18px" src="https://user-images.githubusercontent.com/69451758/194764808-d6fd7767-afaa-4d41-819c-1a42557f2596.png" /> <b>인스타그램 클론 코딩 프로젝트, Samstagram입니다.</b>

<br />

## 기능 소개

<details>
<summary><b>소셜 로그인</b></summary>
  
![sam_google](https://user-images.githubusercontent.com/69451758/194765506-1a550ce2-e0b9-4d74-a1c5-6d4e106d956a.jpg)  
- Google 소셜로그인으로 삼스타그램을 이용할 수 있습니다.

</details>
  
<details>
<summary><b>게시글 무한스크롤</b></summary>
  
![sam_infinite_scroll](https://user-images.githubusercontent.com/69451758/194766051-44ebe5ed-2ba0-4853-9ce0-6a0f2becb469.gif)
  
- 삼스타그램의 게시글을 무한스크롤로 확인할 수 있습니다. 

</details>

<details>
<summary><b>게시글 검색 및 해시태그 검색</b></summary>
    
![sam_search](https://user-images.githubusercontent.com/69451758/194766105-8890213f-bedb-4ef0-bf97-f822ab621f18.gif)
![sam_hashtag](https://user-images.githubusercontent.com/69451758/194766107-af119860-362f-41ed-bbc3-fa30804e625a.gif)
    
- 해시태그에 상단 검색바에 입력한 단어를 포함하는 게시글들을 볼 수 있습니다.
- 게시글의 해시태그를 클릭하면 해시태그 단어를 포함하는 게시글만 모아서 볼 수 있습니다.

</details>
  
<details>
<summary><b>게시글 상세 보기</b></summary>
   
![sam_carousel](https://user-images.githubusercontent.com/69451758/194766278-b525b0ed-ba4d-4855-932d-6d2d81ab3717.gif)  
![sam_detail](https://user-images.githubusercontent.com/69451758/194766280-7caf78a1-3e01-4f0f-a181-ed62d2fad9ee.gif)  
    
- 이미지 캐러셀로 여러 이미지를 확인하고 게시글 클릭을 통한 상세 보기가 가능합니다.
- 게시글 상세 보기에선 댓글 작성 및 다른 사용자들이 작성한 댓글을 볼 수 있습니다.

</details>
  
<details>
<summary><b>게시글 작성 및 삭제</b></summary>
  
![sam_post](https://user-images.githubusercontent.com/69451758/194766258-ee96242c-9672-416d-a730-9c7307c38ccc.gif) 
![sam_delete](https://user-images.githubusercontent.com/69451758/194766263-8e7efc45-0477-4c42-8a4e-0b9ed8451a55.gif)
    
- 게시글을 작성하고 삭제할 수 있습니다.

</details>
  
<details>
<summary><b>사용자 팔로우</b></summary>

![sam_follow](https://user-images.githubusercontent.com/69451758/194766295-52b07973-e0c8-4334-ad69-bcba955cf735.gif)
  
- 다른 사용자를 팔로우 또는 언팔로우 할 수 있습니다.

</details>

<br />

## Members

| 이름       | 포지션       | Github        | 
| ---------- | ---------------- | -------------------------------- |
| **배근아** | `Frontend` | https://github.com/green9930 | 
| **정성일** | `Frontend` | https://github.com/jsi7304 | 

<br />

## Skills

<p>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
  <img src="https://img.shields.io/badge/reduxtoolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white">
  <img src="https://img.shields.io/badge/reduxthunk-764ABC?style=for-the-badge&logo=redux&logoColor=white">
  <br />
  <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white">
  <img src="https://img.shields.io/badge/Styled Components-DB7093?style=for-the-badge&logo=styledComponents&logoColor=white">
</p>

<br />

## 기술 피드백

<details>
<summary><b>검색 기능 구현 방식</b></summary>

<br />

🤔**검색 시 데이터 조회를 어떻게 할 것인가?**  
1. 검색어로 조회할 데이터를 GET요청으로 한번에 불러온 뒤, 그 안에서 입력값을 조회한다.
2. 검색어를 입력할 때마다 해당 단어가 포함된 게시글이 있는지 계속 GET요청을 보낸다.

**기술적 의사 결정**  
구현하려는 검색 기능은 단어를 입력할 때마다 해당되는 게시글의 개수를 하단에 보여줘야 했습니다.   

**피드백**  


</details>
  

