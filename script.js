const modalOverlay = document.getElementById('modalOverlay')

const newBoardBtn = document.getElementById('newBoardBtn')

const createBoardCard = document.getElementById('createBoardCard')

const createBtn = document.getElementById('createBtn')

const cancelBtn = document.getElementById('cancelBtn')

const boardNameInput = document.getElementById('boardNameInput')

const boardsGrid = document.getElementById('boardsGrid')

const emptyState = document.getElementById('emptyState')

const search = document.querySelector('.search')

const filters = document.querySelectorAll('.filter')

let boards =
  JSON.parse( localStorage.getItem('outline_boards')) || []

function saveBoards() {
  localStorage.setItem('outline_boards',JSON.stringify(boards))
}

function renderBoards() {
  document
    .querySelectorAll('.generated-board')
    .forEach(card => card.remove())

  if (boards.length === 0) {
    emptyState.style.display = 'block'
  }

  else {
    emptyState.style.display = 'none'
  }

  boards.forEach(board => {
    const card =
      document.createElement('div')

    card.className =
      'board-card generated-board'

    card.innerHTML = `
      <div class="card-options">
        ⋯
      </div>
      <div class="board-content">
        <h3>
          ${board.name}
        </h3>
        <p>
          ${board.date}
        </p>
      </div>
    `

    card.addEventListener(
      'click',
      () => {
        location.href = 'drawing.html?board=' + board.id
      }
    )

    const options =
      card.querySelector('.card-options')

    options.addEventListener(
      'click', e => {
        e.stopPropagation()

        const action =
          prompt('rename / delete')

        if (action === 'delete') {
          boards = boards.filter(b => b.id !== board.id)

          saveBoards()
          renderBoards()

        }

        if (action === 'rename') {

          const newName = prompt('New board name', board.name)

          if (!newName) return board.name = newName

          saveBoards()
          renderBoards()

        }

      }
    )

    boardsGrid.appendChild(card)

  })

}

function openModal() {
  modalOverlay.classList.add('active')
  setTimeout(() => {boardNameInput.focus()}, 50)

}

function closeModal() {
  modalOverlay.classList.remove('active')
  boardNameInput.value = ''
}

function createBoard() {
  const name =
    boardNameInput.value.trim()

  if (!name) return
  const board = { id: crypto.randomUUID(), name, date: 'Edited just now'}

  boards.unshift(board)

  saveBoards()
  renderBoards()
  closeModal()

}

newBoardBtn.addEventListener(
  'click',
  openModal
)

createBoardCard.addEventListener(
  'click',
  openModal
)

cancelBtn.addEventListener(
  'click',
  closeModal
)

createBtn.addEventListener(
  'click',
  createBoard
)

boardNameInput.addEventListener(
  'keydown',
  e => {

    if (e.key === 'Enter') {

      createBoard()

    }

  }
)

modalOverlay.addEventListener(
  'click',
  e => {

    if (
      e.target === modalOverlay
    ) {

      closeModal()

    }

  }
)

search.addEventListener(
  'input',
  e => {

    const value =
      e.target.value.toLowerCase()

    document
      .querySelectorAll('.generated-board')
      .forEach(card => {

        const title =
          card.innerText.toLowerCase()

        const match =
          title.includes(value)

        card.style.opacity =
          match ? '1' : '0'

        card.style.transform =
          match
            ? 'scale(1)'
            : 'scale(0.96)'

        setTimeout(() => {

          card.style.display =
            match ? '' : 'none'

        }, 120)

        if (match) {

          card.style.display = ''

        }

      })

  }
)

filters.forEach(filter => {

  filter.addEventListener(
    'click',
    () => {

      filters.forEach(f => {
        f.classList.remove('active')
      })

      filter.classList.add('active')

    }
  )

})

renderBoards()