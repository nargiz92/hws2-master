import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Error404 from './pages/Error404'
import PreJunior from './pages/PreJunior'
import Junior from './pages/Junior'
import JuniorPlus from './pages/JuniorPlus'

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus',
}

function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>
                {/*роутинг будут писать студенты*/}
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу /pre-junior*/}
                {/*<Route path={'/'}  element={PATH.PRE_JUNIOR}/>*/}
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                {/*роуты для /pre-junior, /junior, /junior-plus*/}
                <Route path={'/'} element={<Navigate to={PATH.JUNIOR_PLUS}/>}/>

                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>

                <Route path={'/'} element={<Navigate to={PATH.JUNIOR}/>}/>

                <Route path={PATH.JUNIOR} element={<Junior/>}/>

                {/*роут для несуществующей страницы должен отрисовать <Error404 />*/}
                <Route element={<Error404/>}/>
            </Routes>
        </div>
    )
}
// Для браузерных проектов есть BrowserRouter и HashRouter компоненты.
//     BrowserRouter — следует использовать когда вы обрабатываете на сервере динамические запросы,
//     а HashRouter используйте когда у вас статический веб сайт.Оба из них создадут специальный объект истории. Вы должны использовать BrowserRouter, если у вас есть сервер, который отвечает на запросы,
//     и HashRouter, если вы используете статический файловый сервер типо GithubPages

export default Pages
