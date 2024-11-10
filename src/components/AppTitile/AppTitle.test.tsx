import { describe, expect, test } from "vitest"
import { AppTitle } from "./AppTitle"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import styles from '../AppTitile/styles/style.module.scss'

const testTitle = "Список задач"

describe("AppTitle Component", () => {
  test('Рендерим компонент с необходимым заголовком', () => {

    render(<AppTitle AppTitle={testTitle} />)
    
    const appTitleElement = screen.getByText(testTitle)
    expect(appTitleElement).toBeInTheDocument()
  });

  test('Проверка, что класс SCSS применен', () => {

    render(<AppTitle AppTitle={testTitle} />)

    const appTitleElement = screen.getByText(testTitle)
    expect(appTitleElement).toHaveClass(styles.appTitle)
  });
})

