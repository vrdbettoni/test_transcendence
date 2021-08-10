--
-- PostgreSQL database cluster dump
--

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Roles
--

CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'md52a29a4f7eb0a98abca0992ca3fb555b6';






--
-- Databases
--

--
-- Database "template1" dump
--

\connect template1

--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3 (Debian 13.3-1.pgdg100+1)
-- Dumped by pg_dump version 13.3 (Debian 13.3-1.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

\connect postgres

--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3 (Debian 13.3-1.pgdg100+1)
-- Dumped by pg_dump version 13.3 (Debian 13.3-1.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- PostgreSQL database dump complete
--

--
-- Database "testdb" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 13.3 (Debian 13.3-1.pgdg100+1)
-- Dumped by pg_dump version 13.3 (Debian 13.3-1.pgdg100+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: testdb; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE testdb WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE testdb OWNER TO postgres;

\connect testdb

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: companies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.companies (
    id integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now(),
    "updatedAt" timestamp without time zone DEFAULT now(),
    name character varying(100) NOT NULL,
    domain character varying(100),
    description text
);


ALTER TABLE public.companies OWNER TO postgres;

--
-- Name: companies_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.companies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.companies_id_seq OWNER TO postgres;

--
-- Name: companies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.companies_id_seq OWNED BY public.companies.id;


--
-- Name: companies id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.companies ALTER COLUMN id SET DEFAULT nextval('public.companies_id_seq'::regclass);


--
-- Data for Name: companies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.companies (id, "createdAt", "updatedAt", name, domain, description) FROM stdin;
1	2021-08-10 16:29:05.453577	2021-08-10 16:29:05.453577	Facebook	www.facebook.com	social Network App
2	2021-08-10 16:29:06.790242	2021-08-10 16:29:06.790242	Snap	www.snap.com	social Network App
3	2021-08-10 17:08:47.743594	2021-08-10 17:08:47.743594	Snap	www.snap.com	social Network App
4	2021-08-10 17:08:47.895421	2021-08-10 17:08:47.895421	Snap	www.snap.com	social Network App
5	2021-08-10 17:08:48.056965	2021-08-10 17:08:48.056965	Snap	www.snap.com	social Network App
6	2021-08-10 17:08:48.216247	2021-08-10 17:08:48.216247	Snap	www.snap.com	social Network App
7	2021-08-10 17:08:48.373187	2021-08-10 17:08:48.373187	Snap	www.snap.com	social Network App
8	2021-08-10 17:12:55.374356	2021-08-10 17:12:55.374356	Snap	www.snap.com	social Network App
9	2021-08-10 17:12:55.489074	2021-08-10 17:12:55.489074	Snap	www.snap.com	social Network App
10	2021-08-10 17:12:55.6328	2021-08-10 17:12:55.6328	Snap	www.snap.com	social Network App
11	2021-08-10 17:12:55.788279	2021-08-10 17:12:55.788279	Snap	www.snap.com	social Network App
12	2021-08-10 17:12:55.932116	2021-08-10 17:12:55.932116	Snap	www.snap.com	social Network App
13	2021-08-10 17:12:56.082346	2021-08-10 17:12:56.082346	Snap	www.snap.com	social Network App
14	2021-08-10 17:12:56.242917	2021-08-10 17:12:56.242917	Snap	www.snap.com	social Network App
15	2021-08-10 17:12:56.368266	2021-08-10 17:12:56.368266	Snap	www.snap.com	social Network App
\.


--
-- Name: companies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.companies_id_seq', 15, true);


--
-- Name: companies PK_d4bc3e82a314fa9e29f652c2c22; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.companies
    ADD CONSTRAINT "PK_d4bc3e82a314fa9e29f652c2c22" PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database cluster dump complete
--

