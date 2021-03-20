import PropTypes from 'prop-types'

const Host = ({ host }) => {
  const { name, status, type } = host
  return (
    <div
      className={`site-card px-4 py-4 shadow-sm hover:shadow-md rounded-md relative ${
        status ? 'bg-green-50' : 'bg-red-50'
      }`}
    >
      <div>
        <h2 className="text-gray-600 text-xl font-medium tracking-wider uppercase mb-2">
          {name}
        </h2>
        <p className="text-gray-400 text-xs uppercase">{type}</p>
      </div>
      <div
        className={`absolute top-0 right-0 m-2 rounded-full p-2 ${
          status ? 'bg-green-400' : 'bg-red-400'
        }`}
      >
        {status ? (
          <svg
            className="text-white fill-current h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z" />
          </svg>
        ) : (
          <svg
            className="text-white fill-current h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z" />
          </svg>
        )}
      </div>
    </div>
  )
}

Host.propTypes = {
  host: PropTypes.shape({
    name: PropTypes.string,
    status: PropTypes.bool,
    type: PropTypes.string,
  }),
}

export default Host
