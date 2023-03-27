import { getUser } from '@/services/users/getUsers';
import { environment } from '@/utils/environment'

type Props = {
  user: any | null
};

export default function User({ user }: Props) {
  return (
    <div>
      { user ? 
        <main className="flex flex-col items-center justify-center w-full flex-1 px-8 text-center">
          <p className="mb-8 dark:text-white font-light lg:text-xl">Hello, my name is <span className="text-gray-500 font-bold">{user.name}</span></p>

          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">My history</h2>

          <p className="mb-8 dark:text-white font-light lg:text-xl text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse viverra justo pretium elit mattis, quis dapibus nisl elementum. Integer mattis volutpat enim, a mattis augue consectetur feugiat. Suspendisse eget ex varius, vestibulum mauris vitae, placerat metus. Aenean sed elit id nisi pretium varius. Duis efficitur rutrum massa ac vulputate. Cras tempor lectus quis finibus lobortis. Nullam ut elit ut est sollicitudin vehicula.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <a
              href={user.github_url}
              className="flex items-center justify-center gap-x-2 rounded-md border border-slate-600 bg-slate-700 py-3 px-4 text-slate-300 transition hover:text-purple-400"
            >
              <svg
                style={{ color: "rgb(203, 213, 225)" }}
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="h-5 w-5"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                  fill="#cbd5e1"
                ></path>
              </svg>
              Github
            </a>

            <a
              href={user.linkedin_url}
              className="flex items-center justify-center gap-x-2 rounded-md border border-slate-600 bg-slate-700 py-3 px-4 text-slate-300 transition hover:text-purple-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path
                  d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
              Linkedin
            </a>

          </div>

          <div className="grid gap-y-3">
            
          </div>
        </main>
        : (
          <p className="mb-8 dark:text-white font-light lg:text-xl text-justify">
            User not found!
          </p>
        )
    }
    </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params }: {params:any}) {
  const name = params.name

  if (!name) {
    return {
      props: {
        user: null
      }
    }
  }

  const user = await getUser(name)

  return {
    props: {
      user
    }
  }
}