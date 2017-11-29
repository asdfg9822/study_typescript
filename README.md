# Typescript 학습

### 전체적인 비고
- tsc 명령어를 사용했을 경우 단일/복수 파일에 대해서 compile을 함
- tsconfig.json을 통해서 컴파일 옵션을 지정 가능
-


### 에디터

##### 전체
* 기본적으로 모든 에디터가 프로젝트 전체에서 컴파일 하는 것으로 보임
* 런타임에 바로 검증 및 컴파일 가능

##### Webstorm
* .ts와 .js가 단일로 묶여있어 보기가 편함 (src, lib와 같은 형태로 폴더 구분할 경우 어차피 필요 없어 보이긴 함)

##### Visual Studio
* Class/Interface에서 지정한 Type또한 Code hint로 제공
* Cmd + Shift + B를 누르면 Task Runner를 구성/실행할 수 있음
* Task Runner를 생성할 경우 .vscode > task.json파일이 생성됨 (오픈소스에 많이 보이는 의문에 그것이 여기에..)
