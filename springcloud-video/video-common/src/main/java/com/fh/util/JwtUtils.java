package com.fh.util;


import com.fh.common.ServerResponse;
import io.jsonwebtoken.*;

import java.util.Date;

public class JwtUtils {
    /**
     * 签发JWT
     *
     * @param id
     * @param subject   可以是JSON数据 尽可能少
     * @param ttlMillis
     * @return String
     */
    public static String createJWT(String id, String subject, long ttlMillis) {
        SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS256;
        long nowMillis = System.currentTimeMillis();
        Date now = new Date(nowMillis);
        //SecretKey secretKey = generalKey();
        JwtBuilder builder = Jwts.builder()
                .setId(id)
                .setSubject(subject)   // 主题
                .setIssuer("user")     // 签发者
                .setIssuedAt(now)      // 签发时间
                .signWith(signatureAlgorithm, SystemConstant.SECRET_KEY); // 签名算法以及密匙
        if (ttlMillis >= 0) {
            long expMillis = nowMillis + ttlMillis;
            Date expDate = new Date(expMillis);
            builder.setExpiration(expDate); // 过期时间
        }
        return builder.compact();
    }

    /**
     * 验证JWT
     *
     * @param jwtStr
     * @return
     */
    public static ServerResponse validateJWT(String jwtStr) {


        try {
            Claims claims = parseJWT(jwtStr);
            return ServerResponse.success(claims);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ServerResponse.error();
    }


    /**
     * 解析JWT字符串
     *
     * @param jwt
     * @return
     * @throws Exception
     */
    public static Claims parseJWT(String jwt) throws Exception {

        return Jwts.parser()
                .setSigningKey(SystemConstant.SECRET_KEY)
                .parseClaimsJws(jwt)
                .getBody();
    }
}