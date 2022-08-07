<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html id="home" lang="ko">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>MIS</title>
        <!--
        <link rel="stylesheet" type="text/css" href="resources/css/screen.css" media="screen" />
        <link rel="stylesheet" type="text/css" href="resources/css/print.css" media="print" />
        <link rel="stylesheet" type="text/css" href="resources/css/content.css" media="screen" />
        <link rel="stylesheet" type="text/css" href="resources/css/main/welcome.css" />
        -->
        
        <link rel="stylesheet" type="text/css" href="${initParam.extjs_url}/resources/css/ext-all.css" media="screen" />
        
        <style type="text/css">
        
        </style>
        <script type="text/javascript" src="${initParam.jquery_url}/jquery.min.js" charset="UTF-8"></script>
        <script type="text/javascript" src="${initParam.extjs_url}/ext-debug.js" charset="UTF-8"></script>
        
        <script type="text/javascript" src="app.js" charset="UTF-8"></script>
    </head>
    <body>
    <div id="topPanelHtml" class="x-hidden">
        ${pageContext.request.userPrincipal.name}님 환영합니다. <a href="${pageContext.request.contextPath}/logout_process.jsp">로그아웃</a>
    </div>
    <div id="navigation" class="x-hidden">
        <ul>
            <li><a id="users" href="#">사용자</a>
        </ul>
    </div>
    <div id="defaultTabContent" class="x-hidden">
        <pre>
        </pre>
    </div> 
    <script type="text/javascript">
        var contextPath = '${pageContext.request.contextPath}';
        var userName = '${pageContext.request.userPrincipal.name}';
    </script>
    </body>
</html>