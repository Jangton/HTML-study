<%@ page contentType="text/html; charset=UTF-8"%>
<%
	String id = request.getParameter("id");
	String pwd = request.getParameter("pwd");
%>
ID : <%=id%><br>
PWD : <%=pwd%><br>
<button onclick="history.back()">뒤로</button>