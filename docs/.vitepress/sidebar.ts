import { readdirSync, statSync } from 'fs'
import { join, sep } from 'path'
import * as console from "console";

const replaceMap = {
    base: '基础',
    chart: '前端可视化',
    framework: '前端框架',
    'ui-library': 'UI库',
    antd: 'Ant Design',
    'element ui': 'Element UI',
    'element plus': 'Element Plus',
    'micro-front-end': '微前端',
    other: '其他',
    interview: '面试',
}

const rootPath = 'docs'

const getSidebar = (startPath: string, targetPath: string) => {
    const sidebar = []
    const wherePath = `${startPath}/${targetPath}`
    const pathList = readdirSync(wherePath)
    const sortPath = pathList.sort((a: T, b: T) => a - b)
    pathList.forEach((item: string) => {
        const fullPath = join(wherePath, item)
        if (statSync(fullPath).isDirectory()) {
            sidebar.push({
                text: replaceMap[item] ?? item,
                collapsed: true,
                items: getSidebar(wherePath, item),
            })
        } else {
            let linkList = fullPath.split(sep)
            if (linkList.includes(rootPath)) linkList.shift()
            const linkPath = linkList.join(sep)
            sidebar.push({
                text: item.replace('.md', ''),
                link: linkPath.replace('.md', ''),
            })
        }
    })
    return sidebar
}

export default getSidebar
