<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" encoding="UTF-8" />
    
    <xsl:template match="/">
        <html>
            <head>
                <title>Аттестация</title>
                <style>
                    .td{margin:2px; padding:5px;text-align:center;font-size:20px;font-family:Tmes New Roman}
                    .low-grade { background-color: red; color: white; }
                    .high-grade { background-color: green; color: white; }
                </style>
            </head>
            <body>
                <h1>Таблица аттестации студентов</h1>
                <table border="1">
                    <tr>
                        <th>Имя</th>
                        <th>Предмет</th>
                        <th>Оценка</th>
                    </tr>
                    <xsl:for-each select="list/person">
                        <tr>
                            <td class="td"><xsl:value-of select="name" /></td>
                            <td class="td"><xsl:value-of select="subject" /></td>
                            <td class="td">
                                <xsl:attribute name="class">
                                    <xsl:choose>
                                        <xsl:when test="grade &lt; 4">low-grade</xsl:when>
                                        <xsl:when test="grade &gt; 8">high-grade</xsl:when>
                                    </xsl:choose>
                                </xsl:attribute>
                                <xsl:value-of select="grade" />
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
