REM Set Android Home
set ANDROID_HOME=C:\Program Files (x86)\Android\android-sdk
set ANDROID_PATH=%ANDROID_HOME%\tools;%ANDROID_HOME%\platform-tools

REM Set NodeJS
set NODEJS=C:\Program Files\nodejs

REM Set NodeJS Modules
set NODEJS_MODULES=%USERPROFILE%\AppData\Roaming\npm

REM Set Git
set GIT_HOME=C:\Program Files (x86)\Git
set GIT_PATH=%GIT_HOME%\bin

REM Set JDK
set JAVA_HOME=C:\Program Files\Java\jdk1.8.0_45
set JAVA_PATH=%JAVA_HOME%\bin

set PATH=%ANDROID_PATH%;%NODEJS%;%NODEJS_MODULES%;%JAVA_PATH%;%GIT_PATH%;%PATH%
