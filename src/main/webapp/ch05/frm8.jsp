<!-- frm8.jsp -->
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	String id = request.getParameter("id");
	String pwd = request.getParameter("pwd");
	String url = request.getParameter("url");
	response.sendRedirect(url);
%>
id : <%=id%><br>
pwd : <%=pwd%><br>
url : <%=url%><br>
